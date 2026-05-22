import { useEffect, useRef, RefObject } from 'react';

export function useIntersectionObserver(
    callback: (entry: IntersectionObserverEntry) => void,
    options: IntersectionObserverInit = { threshold: 0.6 }
) {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(callback);
        }, options);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [callback, options]);

    return observerRef.current;
}