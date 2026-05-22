'use client';

import { Home, Compass, User } from 'lucide-react';

export default function BottomNav() {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/90 border-t border-white/10 z-50">
            <div className="flex items-center justify-around py-2">
                {[
                    { icon: Home, label: 'Home', active: true },
                    { icon: Compass, label: 'Discover' },
                    { icon: User, label: 'Profile' },
                ].map((item, i) => (
                    <button
                        key={i}
                        className={`flex flex-col items-center py-1 px-5 transition-all ${item.active ? 'text-white' : 'text-white/60'}`}
                    >
                        <item.icon className="w-6 h-6 mb-1" />
                        <span className="text-xs">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}