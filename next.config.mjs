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
        hostname: "cc.tazminyadak.com",
      },
      {
        protocol: "https",
        hostname: "cc.tazminmashin.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // نیازی به ":" نیست
      },
    ],
  },
};

export default nextConfig;
