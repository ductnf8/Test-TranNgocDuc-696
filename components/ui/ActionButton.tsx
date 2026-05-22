'use client';

import { motion } from 'framer-motion';

interface Props {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

export default function ActionButton({
                                         icon,
                                         label,
                                         active,
                                         onClick,
                                     }: Props) {
    return (
        <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.08 }}
            onClick={onClick}
            className="flex flex-col items-center gap-1"
        >
            <div
                className={`
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-white/10
          bg-white/10
          backdrop-blur-md
          transition-all duration-300
          ${
                    active
                        ? 'text-red-500'
                        : 'text-white'
                }
        `}
            >
                {icon}
            </div>

            <span className="text-xs font-medium text-white">
        {label}
      </span>
        </motion.button>
    );
}