  // ...existing code...
"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

type SpeechRecognition = {
  start: () => void;
  stop: () => void;
  abort: () => void;
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: unknown) => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
};

type SpeechRecognitionEvent = {
  results: SpeechRecognitionResultList;
};

// ====== CONFIGURABLE CONSTANTS ======
const API_ENDPOINT = "/api/getSmartResponse";
const BOT_GREETING = "Hello! 👋 I'm your friendly Portfolio Chatbot. Ask me anything about my work, skills, or projects—I'm here to help!";
const PRE_CHAT_GREETING = "Hi! Need any help?";
const PRE_CHAT_GREETING_TIMEOUT = 6000;


// Voice API types: Add correct global declaration for browser APIs
declare global {
  interface Window {
    webkitSpeechRecognition?: unknown;
    SpeechRecognition?: unknown;
  }
}

declare global {
  interface Window {
    lastUserInput?: string;
  }
}

const ProfessionalChatbot: React.FC = () => {
  // ...existing code...
  // Helper to enhance grammar and friendliness
  function enhanceReply(text: string): string {
    let reply = text.trim();
    // Capitalize first letter
    reply = reply.charAt(0).toUpperCase() + reply.slice(1);
    // Add period if missing
    if (reply.length > 2 && !/[.!?]$/.test(reply)) reply += '.';
    // Replace common contractions and improve tone
    reply = reply.replace(/\bi am\b/gi, "I'm");
    reply = reply.replace(/\bi\s+have\b/gi, "I've");
    reply = reply.replace(/\bi\s+will\b/gi, "I'll");
    reply = reply.replace(/\bi\s+would\b/gi, "I'd");
    reply = reply.replace(/\bi\s+can\b/gi, "I can");
    reply = reply.replace(/\bi\s+cannot\b/gi, "I can't");
    reply = reply.replace(/\bi\s+do not\b/gi, "I don't");
    reply = reply.replace(/\bi\s+am not\b/gi, "I'm not");
    reply = reply.replace(/\bi\s+was\b/gi, "I was");
    reply = reply.replace(/\bi\s+had\b/gi, "I had");
    reply = reply.replace(/\bi\s+could\b/gi, "I could");
    reply = reply.replace(/\bi\s+should\b/gi, "I should");
    reply = reply.replace(/\bi\s+would\b/gi, "I would");
    reply = reply.replace(/\bi\s+may\b/gi, "I may");
    reply = reply.replace(/\bi\s+might\b/gi, "I might");
    // Add a friendly emoji if not present
    if (!reply.match(/[😊😀😃🙂]/)) reply += " 😊";
    // Playful handling for slang/casual/fun fallback (only if user's input contains slang)
    if (typeof window !== "undefined" && window.lastUserInput) {
      const slangPattern = /bruh|bro+|lol|boring|shut up|you dumb|you fake|curse|slang|vibe|chill|whatever|bored|rap|fun fact/i;
      if (slangPattern.test(window.lastUserInput)) {
        reply = "Haha, I get the vibe! But let’s keep it pro—ask me about Hafeez’s projects, skills, or personal journey. Want to hear about his latest work or a fun fact from his portfolio? 😊";
      }
    }
    // Special fallback for unknown person queries
    if (/sorry, i couldn't find any info on that/i.test(reply)) {
      reply = "Sorry, I couldn't find any information about that person. You can ask me about my projects, skills, experience, education, certifications, or personal details! 😊";
    }
    return reply;
  }
  // Theme toggle state (restricted to chatbot)
  const [isChatDark, setIsChatDark] = useState(false);
  const toggleChatTheme = () => setIsChatDark((prev) => !prev);
  const [open, setOpen] = useState(false);
  const formatTime = React.useCallback((date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).replace(/am|pm/, m => m.toUpperCase());
  }, []);
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: BOT_GREETING, time: formatTime(new Date()) }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [listening, setListening] = useState(false);
  const [voiceTimer, setVoiceTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Voice recognition setup
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  // Hide greeting after timeout or when chat opens
  // Timer for voice input
  useEffect(() => {
    if (listening) {
      setVoiceTimer(0);
      timerRef.current = setInterval(() => {
        setVoiceTimer((t) => t + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [listening]);

  // Hide greeting after timeout or when chat opens
  useEffect(() => {
    if (open) setShowGreeting(false);
    if (!open) {
      const timer = setTimeout(() => setShowGreeting(false), PRE_CHAT_GREETING_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  // Read bot responses aloud
  // Voice reading removed: bot responses are now text-only

  // Send message handler (useCallback for useEffect dependency)
  const sendMessage = React.useCallback(async (overrideInput?: string) => {
    const text = overrideInput !== undefined ? overrideInput : input;
    if (!text.trim()) return;
    if (typeof window !== "undefined") {
      window.lastUserInput = text;
    }
    const now = new Date();
    const userMsg = { id: Date.now(), sender: "user", text, time: formatTime(now) };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const url = `${API_ENDPOINT}?message=${encodeURIComponent(text)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      // Polish grammar and friendliness
      let enhancedResponse = enhanceReply(data.response);
      if (enhancedResponse && enhancedResponse.length < 120) {
        enhancedResponse += "\nIf you'd like to know more, just ask!";
      }
      setMessages((msgs) => [
        ...msgs,
        { id: Date.now() + 1, sender: "bot", text: enhancedResponse, time: formatTime(new Date()) }
      ]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { id: Date.now() + 2, sender: "bot", text: "Sorry, I couldn't get a response. Please try again later.", time: formatTime(new Date()) }
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, formatTime]);

  // Voice recognition setup (single useEffect, outside sendMessage)
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      // @ts-expect-error: SpeechRecognition is a browser API constructor
      recognitionRef.current = new SpeechRecognition();
      if (recognitionRef.current) {
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onstart = () => {
          setListening(true);
        };
        recognitionRef.current.onend = () => setListening(false);
        recognitionRef.current.onerror = () => {
          setListening(false);
        };

        recognitionRef.current.onresult = (event: { results: SpeechRecognitionResultList }) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          // Do NOT auto-send. User must click send button to submit.
        };
      }
    } else {
    }
  }, [sendMessage]);

  // Handle Enter key
  // Handle Enter, Ctrl+Enter, and Esc key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      sendMessage();
    } else if (e.key === "Enter" && !e.ctrlKey && !e.metaKey) {
      sendMessage();
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Floating button toggle
  const toggleChat = () => setOpen((o) => !o);

  // Start voice recognition
  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  // Avatar images (replace with your own or use emoji)
  const botAvatar = (
    <span className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-primary-600 flex items-center justify-center text-white font-bold mr-2 shadow-xl border-2 border-white animate-fade-in" aria-label="Bot avatar">
      🤖
    </span>
  );
  const userAvatar = (
    <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-600 to-green-400 flex items-center justify-center text-white font-bold ml-2 shadow-xl border-2 border-white animate-fade-in" aria-label="User avatar">
      🧑
    </span>
  );

  return (
    <>
  {/* Floating Chatbot Button with notification dot */}
      <button
        aria-label={open ? "Close chatbot" : "Open chatbot"}
        className="fixed z-50 md:bottom-6 md:right-6 bottom-4 right-4 md:w-14 md:h-14 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 group"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)" }}
        onClick={toggleChat}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") toggleChat();
        }}
      >
        <div className="relative">
          <Image
            src="/chat.png"
            alt="Chatbot Icon"
            width={32}
            height={32}
            className="mx-auto transition-transform duration-200 group-hover:scale-110"
            priority
          />
          {/* Notification dot if new message and chat closed */}
          {!open && messages.length > 1 && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-white" />
          )}
        </div>
      </button>
    
      {/* Pre-Chat Greeting Bubble */}
      {showGreeting && !open && (
        <div className="fixed z-50 bottom-24 right-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 animate-fade-in-up text-sm font-medium select-none pointer-events-none">
          <span className="animate-fade-in">{PRE_CHAT_GREETING}</span>
        </div>
      )}
      {/* Chat Window with local theme */}
      <div
  className={`fixed z-50 md:bottom-24 md:right-6 bottom-4 right-2 md:w-[340px] w-[92vw] max-w-[98vw] px-4 pb-4 pt-3 ${isChatDark ? 'bg-gray-900/80 border-green-700' : 'bg-white/80 border-primary-200'} backdrop-blur-2xl rounded-3xl shadow-2xl flex flex-col border-2 transition-all duration-300 ${open ? "opacity-100 translate-y-0 scale-100 animate-fade-in" : "opacity-0 pointer-events-none scale-95 translate-y-8"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Portfolio Assistant Chat"
        style={{ minHeight: open ? 260 : 0, maxHeight: '60vh', height: open ? '60vh' : 0, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
      >
        {/* Header with theme toggle (local to chatbot) */}
        <div className={`flex items-center justify-between px-4 py-3 border-b ${isChatDark ? 'border-gray-800' : 'border-gray-200'} rounded-t-xl bg-gradient-to-br from-primary-600 to-green-500 text-white`}>
          <span className="font-semibold tracking-wide text-lg">Chatbot Assistant</span>
          <div className="flex items-center gap-2">
            <button
              aria-label={isChatDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleChatTheme}
              className="p-1 rounded hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
              title={isChatDark ? "Light mode" : "Dark mode"}
            >
              {isChatDark ? (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              ) : (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" /></svg>
              )}
            </button>
            <button aria-label="Close chat" onClick={toggleChat} className="p-1 rounded hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
        {/* Messages */}
  <div className={`flex-1 overflow-y-auto px-3 py-3 space-y-4 ${isChatDark ? 'bg-gray-800/60 scrollbar-thumb-primary-800' : 'bg-gray-50/60 scrollbar-thumb-primary-200'} scrollbar-thin`} style={{ minHeight: 140, maxHeight: '55vh' }} aria-live="polite">
          {messages.map((msg, idx) => (
            <div
              key={msg.id}
              className={`flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              aria-label={msg.sender === "user" ? "Your message" : "Bot message"}
            >
                <div className="flex items-end gap-1">{/* Reduced gap for compact look */}
                  {msg.sender === "bot" ? botAvatar : userAvatar}
                  <span
                  className={`relative inline-block px-5 py-3 rounded-2xl shadow-xl text-base max-w-[80%] break-words transition-all duration-200 border-2 ${
                    msg.sender === "user"
                      ? (isChatDark ? "bg-primary-700 text-white border-primary-800" : "bg-primary-600 text-white border-primary-700") + " rounded-br-3xl animate-slide-in-right"
                      : (isChatDark ? "bg-gray-900/80 text-green-100 border-green-700" : "bg-white text-gray-900 border-primary-200") + " rounded-bl-3xl animate-slide-in-left"
                  } animate-fade-in drop-shadow-md`}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  aria-label={msg.sender === "user" ? "Your message bubble" : "Bot message bubble"}
                >
                  {msg.text}
                  <span className={`block text-[11px] text-right mt-1 ${isChatDark ? "text-green-300" : "text-gray-400"}`}>{msg.time}</span>
                  {/* Bubble tail */}
                  {msg.sender === "user" ? (
                    <span className={`absolute right-0 bottom-0 w-2 h-2 ${isChatDark ? "bg-primary-800" : "bg-primary-600"} rounded-br-lg transform translate-x-1/2 translate-y-1/2`} />
                  ) : (
                    <span className={`absolute left-0 bottom-0 w-2 h-2 ${isChatDark ? "bg-green-700" : "bg-primary-200"} rounded-bl-lg transform -translate-x-1/2 translate-y-1/2`} />
                  )}
                </span>
              </div>
            </div>
          ))}
          {/* WhatsApp-style voice recording bubble inside chat area */}
          {listening && (
              <div className="flex items-end justify-end animate-fade-in gap-1">
                {userAvatar}
                <span
                  className={`relative inline-block px-4 py-2 rounded-xl shadow-lg text-base max-w-[80%] break-words transition-all duration-200 border-2 ${isChatDark ? "bg-blue-700 text-white border-blue-400" : "bg-blue-100 text-blue-900 border-blue-300"}`}
                  tabIndex={0}
                  aria-label="Recording voice message"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                >
                {/* Mic icon */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3m0 0h-3m3 0h3m-6-3a6 6 0 0012 0V9a6 6 0 00-12 0v6z" />
                  </svg>
                </span>
                {/* Animated waveform */}
                <span className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`block w-1.5 rounded bg-blue-400 animate-waveform${i}`}
                      style={{ height: `${8 + (i % 3) * 8 + (voiceTimer % 2 ? 4 : 0)}px`, transition: "height 0.2s" }}
                    />
                  ))}
                </span>
                {/* Timer */}
                <span className="ml-2 font-mono text-xs text-blue-700 dark:text-blue-200">
                  {`${String(Math.floor(voiceTimer / 60)).padStart(2, "0")}:${String(voiceTimer % 60).padStart(2, "0")}`}
                </span>
                {/* Send button for voice (simulated) */}
                <button
                  onClick={() => { setListening(false); sendMessage("[Voice message sent]"); }}
                  className="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow flex items-center justify-center"
                  aria-label="Send voice message"
                  type="button"
                  tabIndex={0}
                >
                  {/* Right arrow icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </span>
            </div>
          )}
          {loading && (
            <div className="flex items-center gap-2 animate-fade-in" aria-label="Bot typing">
              {botAvatar}
              <span className="inline-block px-3 py-2 rounded-lg shadow text-sm bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-gray-100 animate-pulse">typing<span className="animate-bounce">...</span></span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        {/* Sticky Input & Voice Controls */}
        <div className={`flex items-center gap-2 px-4 py-3 border-t ${isChatDark ? 'border-gray-800 bg-gray-900/80' : 'border-gray-200 bg-white/80'} rounded-b-xl ${listening ? 'border-4 border-green-400 animate-pulse' : ''} sticky bottom-0 left-0 w-full z-20`} style={{background: isChatDark ? 'rgba(17,24,39,0.92)' : 'rgba(255,255,255,0.96)'}}>
          <input
            type="text"
            className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600 px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all animate-fade-in placeholder:italic placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-md text-[17px]"
            style={{ minWidth: 0 }}
            placeholder={listening ? "Listening... Please ask your question clearly." : "Type your message here..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Type your message"
            autoFocus={open}
            autoCorrect="on"
            spellCheck={true}
            disabled={listening}
            tabIndex={0}
          />
          {/* Send button for text */}
          {!listening && (
            <button
              onClick={() => sendMessage()}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 md:p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow flex items-center justify-center w-12 h-12 md:w-10 md:h-10"
              aria-label="Send message"
              disabled={loading || !input.trim()}
              type="button"
              tabIndex={0}
            >
              {/* Right arrow icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          )}
          {/* Microphone Button */}
          {!listening && (
            <button
              onClick={startListening}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md flex items-center justify-center w-12 h-12 md:w-10 md:h-10"
              aria-label="Start voice input"
              disabled={loading}
              type="button"
              tabIndex={0}
            >
              <span role="img" aria-label="Microphone" className="animate-bounce text-xl md:text-base">🎤</span>
            </button>
          )}
        </div>
      {open && (
  <div className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden animate-fade-in pointer-events-none" aria-hidden="true"></div>
      )}
    </div> {/* Close main chat window */}
    </>
  );
};

export default ProfessionalChatbot;

/*
====================
Customization Guide:
====================
- To change the icon, swap the SVG in the button.
- To change the color, update bg-primary-600, hover:bg-primary-700, text-white, etc.
- To change the size, update w-14 h-14 (desktop) and w-12 h-12 (mobile).
- To show a notification, add a notification dot in the button.
- To change the pre-chat greeting, edit PRE_CHAT_GREETING.
- To change the greeting timeout, edit PRE_CHAT_GREETING_TIMEOUT.
- To update portfolio data, edit PORTFOLIO_DATA.
- To change bot personality, update BOT_GREETING or add logic in sendMessage.
- All styling uses Tailwind CSS classes for easy customization.
*/
