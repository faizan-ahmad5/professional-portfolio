// app/api/getSmartResponse/route.ts
import { NextRequest, NextResponse } from "next/server";
import { chunks } from "@/data/portfolioChunks";

function searchChunks(message: string) {
  const query = message.toLowerCase().trim();
  // More natural greetings
  const greetings = [
    "hi", "hello", "hey", "hii", "good morning", "good afternoon", "good evening", "greetings", "salam", "hola"
  ];
  if (greetings.some((g) => query.includes(g))) {
    // Find all greeting/small talk chunks and deduplicate by answer
    const greetingChunks = chunks.filter(
      (chunk) => chunk.type === "casual" && /how are you|hello|hi|greetings|how's life|how are you today/i.test(chunk.text)
    );
    if (greetingChunks.length > 0) {
      // Only return the first matching answer, and do not concatenate multiple answers
  // Only return the answer, not the question
  const answerMatch = greetingChunks[0].text.match(/A:(.*)/);
  const answer = answerMatch ? answerMatch[1].trim() : greetingChunks[0].text.trim();
  return answer + "\nIs there anything else you'd like to know about me? 😊";
    }
    // Fallback to default greeting
    return "👋 Hi! I'm Hafeez, your friendly portfolio assistant. What would you like to know about me today?";
  }

  // Flexible type-based matching with fuzzy logic
  // Synonym mapping for better intent detection
  const synonymMap: Record<string, string[]> = {
    project: ["project", "projects", "publication", "publications", "research", "thesis", "portfolio", "case study", "work", "works", "hafeez projects", "his projects", "latest work", "recent work", "gis project", "mapping project", "portfolio project", "studies", "articles", "papers", "reports"],
    skills: ["skills", "expertise", "tools", "technologies", "languages", "proficiencies", "abilities", "competencies", "strengths", "gis skills", "remote sensing skills", "software", "programming", "coding"],
    education: ["education", "degree", "study", "studies", "school", "university", "college", "academic", "background", "qualifications", "alma mater"],
    experience: ["experience", "work", "job", "career", "roles", "history", "positions", "employment", "professional experience", "work history", "track record"],
    certification: ["certification", "certificate", "certifications", "course", "courses", "training", "accreditation", "badges", "credentials"],
    contact: ["contact", "email", "phone", "location", "address", "linkedin", "connect", "where is from", "where is located", "where does he live", "where are you from", "reach", "get in touch", "call", "whatsapp"],
    personal: ["personal", "birth", "nationality", "dob", "birthday", "origin", "where was born", "place of birth", "where is from", "where are you from", "where is hafeez from", "nationality", "country", "hometown", "family", "hobbies", "interests", "life", "about hafeez", "personal life"],
    developer: ["developer", "who developed", "who develop", "who made", "who created", "faizan", "faizan ahmad", "faizan ahmad khan", "website developer", "site developer", "author", "creator", "linkedin faizan", "faizan linkedin", "developer info", "developer details"],
    availability: ["availability", "open", "opportunity", "hire", "consulting", "freelance", "available", "open to work", "open for projects"]
  };

  // Use synonym mapping for type detection
  for (const [type, synonyms] of Object.entries(synonymMap)) {
    if (synonyms.some((kw) => query.includes(kw) || kw.includes(query))) {
      let matches = chunks.filter((chunk) => chunk.type === type);
      // For 'project', further filter to only project/publication/thesis-related chunks
      if (type === 'project') {
        matches = matches.filter((chunk) => /project|publication|research|thesis|portfolio|case study/i.test(chunk.text));
      }
      if (matches.length > 0) {
        let intro = '';
        switch(type) {
          case 'project': intro = "Here are Hafeez's key projects and publications:"; break;
          case 'skills': intro = "These are my key skills and tools:"; break;
          case 'education': intro = "My educational background:"; break;
          case 'experience': intro = "Here's my professional experience:"; break;
          case 'certification': intro = "Certifications I've earned:"; break;
          case 'contact': intro = "Here's how you can reach me:"; break;
          case 'personal': intro = "Personal details:"; break;
          case 'developer': intro = "Developer info:"; break;
          case 'availability': intro = "I'm open to new opportunities!"; break;
        }
        // Summarize and format project chunks as bullet points
        let summary = '';
        if (type === 'project') {
          summary = matches.map((c) => `• ${c.text.replace(/^Q:.*?\nA:/, '').replace(/^A:/, '').trim()}`).join('\n');
        } else {
          summary = matches.map((c) => {
            const answerMatch = c.text.match(/A:(.*)/);
            return answerMatch ? answerMatch[1].trim() : c.text.trim();
          }).join(' ');
        }
        let followUp = '';
        if (["project","skills","education","experience"].includes(type)) {
          followUp = "\nWant more details on any project or publication?";
        } else if (type === "contact") {
          followUp = "\nFeel free to reach out if you have any questions!";
        } else if (type === "personal") {
          followUp = "\nWant to know about my hobbies or interests?";
        }
        return `${intro}\n${summary}${followUp}`;
      }
    }
  }
  // Synonym mapping for better intent detection
  // Already handled above, so remove old typeKeywords logic

  // Fallback: fuzzy search chunk text
  const matches = chunks.filter((chunk) => {
    // Fuzzy: allow partial, case-insensitive, and ignore punctuation
    const cleanText = chunk.text.toLowerCase().replace(/[^a-z0-9 ]/g, "");
    const cleanQuery = query.replace(/[^a-z0-9 ]/g, "");
    return cleanText.includes(cleanQuery) || cleanQuery.includes(cleanText);
  });
  if (matches.length > 0) {
    const followUp = "\nIs there anything else you'd like to know about me?";
    if (matches.length === 1) {
      const answerMatch = matches[0].text.match(/A:(.*)/);
      const answer = answerMatch ? answerMatch[1].trim() : matches[0].text.trim();
      return answer + followUp;
    }
    return matches.map((c) => {
      const answerMatch = c.text.match(/A:(.*)/);
      return answerMatch ? answerMatch[1].trim() : c.text.trim();
    }).join(' ') + followUp;
  }

  // Last fallback: suggest what user can ask
  return (
    "😅 Sorry, I couldn't find any info on that. You can ask me about my projects, skills, experience, education, certifications, or personal details!"
  );
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const message = url.searchParams.get("message") || "";
  const response = searchChunks(message);
  return NextResponse.json({ response });
}
