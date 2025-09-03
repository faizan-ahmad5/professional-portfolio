/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.100.1:3000",
    // Add more dev origins if needed
  ],
  trailingSlash: false,
  generateEtags: false,
  poweredByHeader: false,
  compress: true,

  // Performance optimizations
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
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

  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

module.exports = nextConfig;
