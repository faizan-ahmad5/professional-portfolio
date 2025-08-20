import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Hafeez Uddin - GIS Specialist Portfolio",
            "alternateName": "Hafeez Uddin Portfolio",
            "url": "https://hafeez-uddin.vercel.app",
            "description": "Professional portfolio of Hafeez Uddin, GIS Specialist and Geospatial Engineer",
            "author": {
              "@type": "Person",
              "name": "Hafeez Uddin"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://hafeez-uddin.vercel.app/?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <main className="min-h-screen bg-white dark:bg-gray-900 w-full max-w-full overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
