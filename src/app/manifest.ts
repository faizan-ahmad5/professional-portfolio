import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hafeez Uddin - Geospatial Engineer',
    short_name: 'Hafeez Uddin',
    description: 'Professional portfolio of Hafeez Uddin, Geospatial Engineer specializing in GIS and Remote Sensing based in Taif, Saudi Arabia',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    orientation: 'portrait-primary',
    categories: ['business', 'education', 'portfolio'],
    lang: 'en',
    icons: [
      {
        src: '/icon?<export>',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/apple-icon?<export>',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  }
}
