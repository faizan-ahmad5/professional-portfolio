// Internal linking utilities for SEO and navigation

export const smoothScrollTo = (targetId: string) => {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const createInternalLink = (text: string, targetId: string, className: string = '') => {
  return {
    text,
    targetId,
    className: `cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline decoration-primary-500/30 hover:decoration-primary-500 ${className}`,
    onClick: () => smoothScrollTo(targetId)
  };
};

// Map experience technologies to related project keywords
export const getRelatedProjectLinks = (technologies: string[]) => {
  const projectKeywords = {
    'ArcGIS Pro': 'projects',
    'Google Earth Engine': 'projects', 
    'Remote Sensing': 'projects',
    'Hazard Mapping': 'projects',
    'Environmental Planning': 'projects',
    'Spatial Analysis': 'projects',
    'ERDAS Imagine': 'projects',
    'Python': 'projects',
    'JavaScript': 'projects'
  };

  return technologies
    .filter(tech => tech in projectKeywords)
    .map(tech => ({
      text: `View ${tech} Projects`,
      targetId: projectKeywords[tech as keyof typeof projectKeywords],
      tech
    }));
};
