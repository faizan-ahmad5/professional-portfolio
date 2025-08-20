import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hafeez Uddin - GIS Specialist & Geospatial Engineer',
    short_name: 'Hafeez Uddin Portfolio',
    description: 'Professional portfolio of Hafeez Uddin, GIS Specialist and Geospatial Engineer based in Saudi Arabia',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    categories: ['business', 'education', 'portfolio'],
    lang: 'en',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable'
      }
    ]
  }
}
