/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        var1: ["hello", "world"],
    },
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
