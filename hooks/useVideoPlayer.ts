// hooks/useVideoPlayer.ts
import { useRef, useState, useCallback } from 'react';

export const useVideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isManuallyPaused, setIsManuallyPaused] = useState(false); // Quan trọng

    const play = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        video.play().catch(() => {});
        setIsPlaying(true);
        setIsManuallyPaused(false); // Reset khi auto play
    }, []);

    const pause = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        setIsPlaying(false);
        setIsManuallyPaused(true); // Đánh dấu là pause thủ công
    }, []);

    const togglePlay = useCallback(() => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }, [isPlaying, play, pause]);

    return {
        videoRef,
        isPlaying,
        isManuallyPaused,
        play,
        pause,
        togglePlay,
        setIsPlaying,
    };
};