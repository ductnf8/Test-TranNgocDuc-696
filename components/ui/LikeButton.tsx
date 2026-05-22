'use client';

import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface LikeButtonProps {
    isLiked: boolean;
    likeCount: number;
    onClick: () => void;
}

export default function LikeButton({ isLiked, likeCount, onClick }: LikeButtonProps) {
    return (
        <motion.button
            whileTap={{ scale: 1.3 }}
            onClick={onClick}
            className="flex flex-col items-center gap-1 text-white group"
        >
            <motion.div
                animate={isLiked ? { scale: [1, 1.4, 1] } : {}}
                transition={{ duration: 0.3 }}
            >
                <Heart
                    className={`w-9 h-9 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`}
                />
            </motion.div>
            <span className="text-sm font-medium">{(likeCount / 1000).toFixed(1)}K</span>
        </motion.button>
    );
}