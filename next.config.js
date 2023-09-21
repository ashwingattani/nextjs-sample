/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  compiler: {
    // babel-plugin-transform-remove-console
    removeConsole: {
      exclude: ["error"],
    },
  },
};

module.exports = nextConfig;
