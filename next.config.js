/** @type {import('next').NextConfig} */

const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
