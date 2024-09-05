/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/alpsavas',
    assetPrefix: '/alpsavas/',
    images: {
        unoptimized: true, // GitHub Pages doesn't support Next.js optimized images
    },
};

export default nextConfig;
