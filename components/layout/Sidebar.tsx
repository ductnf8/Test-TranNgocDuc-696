'use client';

import { Home, Compass, User } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="h-full p-6 flex flex-col border-r border-white/10 bg-black/95">
            <div className="mb-12">
                <h1 className="text-3xl font-bold tracking-tighter">ReelFlow</h1>
            </div>

            <nav className="space-y-2">
                {[
                    { icon: Home, label: 'Trang chủ', active: true },
                    { icon: Compass, label: 'Khám phá' },
                    { icon: User, label: 'Hồ sơ' },
                ].map((item, i) => (
                    <button
                        key={i}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all hover:bg-white/10 ${item.active ? 'bg-white/10 text-white' : 'text-white/70'}`}
                    >
                        <item.icon className="w-6 h-6" />
                        <span className="font-medium">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="mt-auto text-xs text-white/40">
                © 2026 ReelFlow • Portfolio Project
            </div>
        </div>
    );
}