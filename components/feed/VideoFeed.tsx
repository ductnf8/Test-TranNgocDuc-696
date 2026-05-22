'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import VideoCard from './VideoCard';
import { mockVideos } from '@/data/mockVideos';

export default function VideoFeed() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Keyboard navigation cho Desktop
    const scrollToIndex = useCallback((index: number) => {
        const target = document.querySelector(`[data-index="${index}"]`);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            setActiveIndex(index);
        }
    }, []);

    // Keyboard control
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = Math.min(activeIndex + 1, mockVideos.length - 1);
                scrollToIndex(nextIndex);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = Math.max(activeIndex - 1, 0);
                scrollToIndex(prevIndex);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, scrollToIndex]);

    // Intersection Observer
    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
        let mostVisibleIndex = activeIndex;
        let maxRatio = 0.5;

        entries.forEach((entry) => {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            if (entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                mostVisibleIndex = index;
            }
        });

        if (maxRatio > 0.6 && mostVisibleIndex !== activeIndex) {
            setActiveIndex(mostVisibleIndex);
        }
    }, [activeIndex]);

    useEffect(() => {
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(handleIntersection, {
            threshold: [0.4, 0.6, 0.8],
            rootMargin: '-15% 0px -15% 0px',
        });

        document.querySelectorAll('.video-card').forEach(card => {
            observerRef.current?.observe(card);
        });

        return () => observerRef.current?.disconnect();
    }, [handleIntersection]);

    return (
        <div
            ref={containerRef}
            className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide scroll-smooth feed-container"
        >
            {mockVideos.map((video, index) => (
                <div key={video.id} data-index={index} className="video-card">
                    <VideoCard video={video} isActive={index === activeIndex} />
                </div>
            ))}
        </div>
    );
}