'use client';

import { useState } from 'react';
import VideoPlayer from '../video/VideoPlayer';
import LikeButton from '../ui/LikeButton';
import { MessageCircle, Share2, Music } from 'lucide-react';
import { Video } from '@/types/video';

interface VideoCardProps {
    video: Video;
    isActive: boolean;
}

export default function VideoCard({ video, isActive }: VideoCardProps) {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(video.likesCount);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    };

    return (
        <div className="relative w-full h-screen snap-start bg-black flex-shrink-0 overflow-hidden video-card">

            <VideoPlayer src={video.videoUrl} isActive={isActive} />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

            {/* Video Info */}
            <div className="absolute bottom-20 left-4 right-4 z-20 text-white">
                <div className="flex items-center gap-3 mb-3">
                    <img
                        src={video.avatarUrl}
                        alt={video.authorName}
                        className="w-12 h-12 rounded-full ring-2 ring-white/50 object-cover"
                    />
                    <div>
                        <p className="font-semibold text-lg">@{video.authorName}</p>
                        <p className="text-sm text-white/80">Follow</p>
                    </div>
                </div>

                <p className="text-[17px] leading-tight mb-4 pr-12">
                    {video.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-white/70">
                    <Music className="w-4 h-4" />
                    <p className="truncate">Original sound - {video.authorName}</p>
                </div>
            </div>

            {/* Action Bar (Right Side) */}
            <div className="absolute right-4 bottom-28 flex flex-col gap-6 z-30">
                <LikeButton
                    isLiked={isLiked}
                    likeCount={likeCount}
                    onClick={handleLike}
                />

                <button className="flex flex-col items-center gap-1 text-white active:scale-95 transition-transform">
                    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium">{(video.commentsCount / 1000).toFixed(1)}K</span>
                </button>

                <button className="flex flex-col items-center gap-1 text-white active:scale-95 transition-transform">
                    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <Share2 className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium">{(video.sharesCount / 1000).toFixed(1)}K</span>
                </button>
            </div>
        </div>
    );
}