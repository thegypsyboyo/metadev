/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        remotePatterns: [
            
        ]
    }
};

export default nextConfig;
