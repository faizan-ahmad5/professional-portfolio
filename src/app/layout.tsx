import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Hafeez Uddin - Geospatial Engineer",
  description: "🗺️ Professional GIS Specialist & Remote Sensing Engineer in Saudi Arabia with 2+ years expertise in ArcGIS Pro, Google Earth Engine, hazard mapping, environmental planning, and spatial data analysis. Based in Taif, specializing in geospatial solutions.",
  keywords: [
    "Hafeez Uddin",
    "Hafeez Uddin GIS",
    "Hafeez Uddin Portfolio",
    "Hafeez Uddin Geospatial",
    "GIS Specialist",
    "GIS Expert",
    "Geospatial Engineer",
    "Remote Sensing Specialist",
    "ArcGIS Expert",
    "Google Earth Engine",
    "Spatial Analysis Expert",
    "Hazard Mapping Specialist",
    "Environmental Planning GIS",
    "GIS Professional Saudi Arabia",
    "Geomatics Engineer",
    "Satellite Imagery Analysis",
    "LiDAR Analysis",
    "Forest Monitoring GIS",
    "NDVI Analysis Expert",
    "Flood Risk Assessment",
    "GLOF Assessment",
    "Urban Planning GIS",
    "Environmental Assessment",
    "Disaster Risk Reduction",
    "Twaik Holding Group",
    "University of Peshawar",
    "Taif Saudi Arabia",
    "Mecca Saudi Arabia",
    "Pakistan GIS Expert"
  ],
  authors: [{ name: "Hafeez Uddin", url: "https://hafeez-uddin.vercel.app" }],
  creator: "Faizan Ahmad Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hafeez-uddin.vercel.app",
    title: "Hafeez Uddin - GIS Specialist & Geospatial Engineer | Portfolio",
    description: "Professional GIS Specialist and Geospatial Engineer with 2+ years experience in Remote Sensing, ArcGIS Pro, Google Earth Engine, hazard mapping, and environmental planning. Expert in spatial data analysis and disaster risk reduction.",
    siteName: "Hafeez Uddin Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hafeez Uddin - GIS Specialist & Geospatial Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafeez Uddin - GIS Specialist & Geospatial Engineer",
    description: "Professional GIS Specialist with expertise in Remote Sensing, ArcGIS Pro, Google Earth Engine, hazard mapping, and environmental planning. 2+ years experience in spatial data analysis.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'GIS Professional Portfolio',
  other: {
    'google-site-verification': 'zplA69ifzRnY0gQzT1RAi4D995kREAyBmj4JZoi4ZN8',
    'geo.region': 'SA-14',
    'geo.placename': 'Taif, Saudi Arabia',
    'geo.position': '21.2854;40.4183',
    'ICBM': '21.2854, 40.4183',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'theme-color': '#1e40af',
    'msapplication-TileColor': '#1e40af',
    'application-name': 'Hafeez Uddin Portfolio',
    'apple-mobile-web-app-title': 'Hafeez Uddin GIS',
    'revisit-after': '7 days',
    'distribution': 'global',
    'rating': 'general',
    'referrer': 'origin-when-cross-origin'
  },
  metadataBase: new URL('https://hafeez-uddin.vercel.app'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.svg?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg?v=2" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            :root{--primary-50:#eff6ff;--primary-600:#2563eb;--transition-fast:150ms ease-in-out}
            *{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            body{margin:0;font-family:system-ui,-apple-system,sans-serif}
            .hero-section{min-height:100vh;display:flex;align-items:center;justify-content:center}
          `
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-body antialiased`} suppressHydrationWarning={true}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize error handling
              if (typeof window !== 'undefined') {
                window.addEventListener('error', function(event) {
                  if (event.filename && event.filename.includes('extension')) return;
                  console.error('Global error:', event.error);
                });
                
                window.addEventListener('unhandledrejection', function(event) {
                  console.error('Unhandled promise rejection:', event.reason);
                });
              }
            `,
          }}
        />
        <GoogleAnalytics />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Person", "ProfessionalService"],
                "name": "Hafeez Uddin",
                "alternateName": ["Hafeez Uddin GIS", "Hafeez Uddin Geospatial"],
                "jobTitle": ["GIS Specialist", "Geospatial Engineer", "Remote Sensing Specialist"],
                "description": "Professional GIS Specialist and Geospatial Engineer with expertise in Remote Sensing, ArcGIS, Google Earth Engine, Hazard Mapping, Environmental Planning, and Spatial Data Analysis. Based in Taif, Saudi Arabia.",
                "url": "https://hafeez-uddin.vercel.app",
                "sameAs": [
                  "https://www.linkedin.com/in/hafeez-uddin-87a466217/"
                ],
                "email": "hafeezuddiniiui99@gmail.com",
                "telephone": "+966503657540",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Taif",
                  "addressRegion": "Mecca",
                  "addressCountry": "Saudi Arabia"
                },
                "worksFor": {
                  "@type": "Organization",
                  "name": "Twaik Holding Group",
                  "description": "Twaik Co. Ltd for Maintenance and Operation"
                },
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "University of Peshawar",
                  "description": "Degree in Geomatics (Remote Sensing and GIS)"
                },
                "knowsAbout": [
                  "GIS Projects",
                  "Remote Sensing Analysis",
                  "Environmental Analysis",
                  "Geographic Information Systems",
                  "Remote Sensing",
                  "Geospatial Analysis", 
                  "Forest Monitoring",
                  "NDVI Analysis",
                  "Hazard Mapping",
                  "Environmental Planning",
                  "Spatial Analysis",
                  "ArcGIS Pro",
                  "Google Earth Engine",
                  "ERDAS Imagine",
                  "Python for GIS",
                  "JavaScript for GIS",
                  "Satellite Imagery Analysis",
                  "LiDAR Processing",
                  "Optical Remote Sensing",
                  "Thermal Remote Sensing",
                  "Microwave Remote Sensing",
                  "Flood Risk Assessment",
                  "GLOF Assessment",
                  "Landslide Mapping",
                  "Urban Planning",
                  "Infrastructure Mapping",
                  "Climate Change Monitoring",
                  "Disaster Risk Reduction",
                  "Land Management",
                  "Agriculture Monitoring",
                  "Environmental Conservation"
                ],
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Geomatics (Remote Sensing and GIS)",
                    "credentialCategory": "degree",
                    "educationalLevel": "Bachelor"
                  }
                ],
                "serviceType": [
                  "GIS Projects",
                  "Remote Sensing Analysis", 
                  "Environmental Analysis",
                  "GIS Analysis",
                  "Remote Sensing Services",
                  "Spatial Data Analysis",
                  "Environmental Assessment",
                  "Hazard Mapping",
                  "Infrastructure Planning"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Hafeez Uddin - GIS Specialist Portfolio",
                "url": "https://hafeez-uddin.vercel.app",
                "description": "Professional portfolio showcasing GIS expertise, remote sensing projects, and geospatial analysis capabilities",
                "author": {
                  "@type": "Person",
                  "name": "Hafeez Uddin"
                },
                "inLanguage": "en-US",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://hafeez-uddin.vercel.app/?search={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://hafeez-uddin.vercel.app"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About",
                    "item": "https://hafeez-uddin.vercel.app#about"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Experience",
                    "item": "https://hafeez-uddin.vercel.app#experience"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Projects",
                    "item": "https://hafeez-uddin.vercel.app#projects"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Contact",
                    "item": "https://hafeez-uddin.vercel.app#contact"
                  }
                ]
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
