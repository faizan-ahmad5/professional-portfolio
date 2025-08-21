// Social media integration utilities
'use client';

export const socialShareData = {
  url: 'https://hafeez-uddin.vercel.app',
  title: 'Hafeez Uddin - Expert GIS Specialist & Remote Sensing Engineer',
  description: 'Professional GIS Specialist in Saudi Arabia specializing in ArcGIS Pro, Google Earth Engine, hazard mapping, and environmental planning.',
  hashtags: ['GIS', 'RemoteSensing', 'ArcGIS', 'GoogleEarthEngine', 'Geospatial', 'SaudiArabia', 'Environmental', 'Sustainability']
};

export const shareOnLinkedIn = () => {
  const { url } = socialShareData;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  window.open(linkedInUrl, '_blank', 'width=600,height=400');
};

export const shareOnTwitter = () => {
  const { url, title, hashtags } = socialShareData;
  const text = `${title} - Professional GIS Portfolio`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(hashtags.join(','))}`;
  window.open(twitterUrl, '_blank', 'width=600,height=400');
};

export const shareOnFacebook = () => {
  const { url } = socialShareData;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookUrl, '_blank', 'width=600,height=400');
};

export const shareViaEmail = () => {
  const { url, title, description } = socialShareData;
  const subject = encodeURIComponent(title);
  const body = encodeURIComponent(`Check out this professional GIS portfolio: ${description}\n\n${url}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
};

// Social media meta tags for better sharing
export const socialMetaTags = {
  'og:type': 'website',
  'og:title': socialShareData.title,
  'og:description': socialShareData.description,
  'og:url': socialShareData.url,
  'og:image': `${socialShareData.url}/og-image.jpg`,
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:title': socialShareData.title,
  'twitter:description': socialShareData.description,
  'twitter:image': `${socialShareData.url}/og-image.jpg`,
};
