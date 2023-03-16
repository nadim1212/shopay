/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptionsL: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./styles/base.scss"`,
  },
};

module.exports = nextConfig;
