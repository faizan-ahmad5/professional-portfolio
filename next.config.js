/** @type {import('next').NextConfig} */
const nextConfig = {
  // allowedDevOrigins removed: not a valid Next.js config option
  trailingSlash: false,
  generateEtags: false,
  poweredByHeader: false,
  compress: true,

  // Performance optimizations
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    // dangerouslyAllowSVG and contentSecurityPolicy are not valid image options in Next.js 14+
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Security headers for better SEO ranking
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },

  // Experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

module.exports = nextConfig;
