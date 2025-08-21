'use client';

import React from 'react';
import { decodeEmail, createObfuscatedEmailLink } from '@/utils/emailProtection';

interface ProtectedEmailProps {
  email: string;
  className?: string;
  subject?: string;
  children?: React.ReactNode;
}

export const ProtectedEmail: React.FC<ProtectedEmailProps> = ({ 
  email, 
  className = '', 
  subject, 
  children 
}) => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const decodedEmail = decodeEmail(email);
    const mailtoLink = createObfuscatedEmailLink(decodedEmail, subject);
    window.location.href = mailtoLink;
  };

  return (
    <button
      onClick={handleEmailClick}
      className={className}
      type="button"
      aria-label="Send email"
    >
      {children || 'Contact via Email'}
    </button>
  );
};
