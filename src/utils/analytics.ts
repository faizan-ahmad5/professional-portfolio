import { event } from '@/components/GoogleAnalytics';

// Track resume downloads
export const trackResumeDownload = () => {
  event('download', 'resume', 'PDF Resume Download');
};

// Track project PDF downloads
export const trackProjectDownload = (projectName: string) => {
  event('download', 'project', `Project: ${projectName}`);
};

// Track contact form submissions
export const trackContactSubmission = () => {
  event('submit', 'contact', 'Contact Form Submission');
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  event('click', 'social', `${platform} Profile Visit`);
};

// Track navigation
export const trackNavigation = (section: string) => {
  event('navigate', 'menu', `Navigate to ${section}`);
};

// Track theme toggle
export const trackThemeToggle = (theme: string) => {
  event('interact', 'theme', `Switch to ${theme} mode`);
};
