import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
      canvas: "commonjs canvas",
    });
    // config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname:'liveblocks.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname:'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'simpleicons.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
      },
            {
        protocol: 'https',
        hostname: 'linear.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
      }
    ]
  },
  typescript:{
    ignoreBuildErrors: true
  }
};

export default nextConfig;
