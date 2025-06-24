'use client';

import React, { useEffect, useRef } from 'react';

interface LottiePlayerProps {
    src: string;
    className?: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ src, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const hasLoadedRef = useRef(false);

    useEffect(() => {
        if (hasLoadedRef.current) return;

        // Dynamically import the player to ensure it only runs on the client-side.
        import('@lottielab/lottie-player/web').then((LottieModule) => {
            // The module might not have a default export, let's be safe.
            const Lottie = (LottieModule as any).default || LottieModule;

            if (containerRef.current && typeof Lottie === 'function') {
                const player = new Lottie();
                player.setAttribute('src', src);
                player.setAttribute('autoplay', 'true');
                player.setAttribute('loop', 'true');
                player.setAttribute('style', 'width: 100%; height: 100%; background: transparent;');

                // Clear the container before appending
                while (containerRef.current.firstChild) {
                    containerRef.current.removeChild(containerRef.current.firstChild);
                }

                containerRef.current.appendChild(player);
                player.play();
                hasLoadedRef.current = true;
            }
        }).catch(error => {
            console.error("Failed to load Lottie player", error);
        });
    }, [src]);

    return <div ref={containerRef} className={className} />;
};

export default LottiePlayer; 