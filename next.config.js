/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.microlink.io',
                port: '',
            },
        ],
    },
};

module.exports = nextConfig;
