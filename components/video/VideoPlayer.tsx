'use client';

import { useEffect, useCallback } from 'react';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/hooks/useVideoPlayer';

interface VideoPlayerProps {
    src: string;
    isActive: boolean;
}

export default function VideoPlayer({ src, isActive }: VideoPlayerProps) {
    const {
        videoRef,
        isPlaying,
        isManuallyPaused,
        play,
        togglePlay
    } = useVideoPlayer();

    // Auto play khi video active (không hiện icon)
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isActive) {
            video.muted = true;
            play();                    // Tự động play không hiện icon
        } else {
            video.pause();
        }
    }, [isActive, play]);

    // Click thủ công
    const handleClick = useCallback(() => {
        togglePlay();
    }, [togglePlay]);

    return (
        <div
            className="relative w-full h-full bg-black cursor-pointer"
            onClick={handleClick}
        >
            <video
                ref={videoRef}
                src={src}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />

            {/* Chỉ hiện icon khi người dùng pause thủ công */}
            <AnimatePresence>
                {!isPlaying && isManuallyPaused && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.15 }}
                        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                    >
                        <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/30">
                            <Play className="w-10 h-10 text-white ml-[4px]" fill="white" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}