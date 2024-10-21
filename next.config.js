/** @type {import('next').NextConfig} */

module.exports = {
  // reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['images.hdqwalls.com','six-app-assets.s3.eu-north-1.amazonaws.com','via.placeholder.com'],
    formats: ["image/avif", "image/webp"],
  },
};
