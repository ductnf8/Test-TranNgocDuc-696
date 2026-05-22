/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Tối ưu cho Vercel
    experimental: {
        optimizePackageImports: ['framer-motion', 'lucide-react'],
    },

    // Tắt một số warning không cần thiết
    typescript: {
        ignoreBuildErrors: false,        // Giữ false như bạn muốn
    },
};

export default nextConfig;