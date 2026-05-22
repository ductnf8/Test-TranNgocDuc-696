// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'ReelFlow - Vertical Video Feed',
    description: 'TikTok / Reels style video feed',
    icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="vi"
            className="h-full antialiased"
            suppressHydrationWarning  // ← Thêm dòng này
        >
        <body className="h-full bg-black text-white overflow-hidden">
        {children}
        </body>
        </html>
    );
}