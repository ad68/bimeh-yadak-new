/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",

  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tazminmashin.ir",
      },
      {
        protocol: "https",
        hostname: "cdn.hamrah-mechanic.com",
      },
      {
        protocol: "https",
        hostname: "newsmedia.tasnimnews.com",
      },
      {
        protocol: "https",
        hostname: "cc.tazminyadak.com",
      },
      {
        protocol: "https",
        hostname: "cc.tazminmashin.com",
      },
      {
        protocol: "https",
        hostname: "bimehyadak.ir",
      },

      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
};

export default nextConfig;
