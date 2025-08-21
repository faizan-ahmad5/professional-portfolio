// Email obfuscation utilities for spam protection

export const obfuscateEmail = (email: string): string => {
  return email.replace(/[a-zA-Z]/g, (char) => {
    return String.fromCharCode(
      char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13)
    );
  });
};

export const deobfuscateEmail = (obfuscatedEmail: string): string => {
  return obfuscateEmail(obfuscatedEmail); // ROT13 is symmetric
};

export const createObfuscatedEmailLink = (
  email: string,
  subject?: string,
  body?: string
): string => {
  let href = `mailto:${email}`;
  const params = [];
  
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  
  if (params.length > 0) {
    href += `?${params.join('&')}`;
  }
  
  return href;
};

// Base64 encoding for additional obfuscation
export const encodeEmail = (email: string): string => {
  return btoa(email);
};

export const decodeEmail = (encodedEmail: string): string => {
  try {
    return atob(encodedEmail);
  } catch {
    return '';
  }
};
