interface Props {
    authorName: string;
    description: string;
}

export default function VideoOverlay({
                                         authorName,
                                         description,
                                     }: Props) {
    return (
        <div className="absolute bottom-6 left-4 z-20 max-w-[70%] text-white">
            <h3 className="mb-2 text-lg font-bold">
                @{authorName}
            </h3>

            <p className="text-sm leading-relaxed text-white/90">
                {description}
            </p>
        </div>
    );
}