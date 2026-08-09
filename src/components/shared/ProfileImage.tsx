"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
}

/**
 * ProfileImage component.
 *
 * To replace the placeholder with a real photo:
 * 1. Place your photo in public/images/ (e.g., public/images/profile.jpg)
 * 2. Update the `profileImage` field in src/data/profile.ts
 *
 * No UI code changes required.
 */
export function ProfileImage({
  src,
  alt = "Abdul Muqeet Armar",
  size = 400,
}: ProfileImageProps) {
  const hasImage = src && !src.includes("placeholder");

  if (hasImage) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glow-blue">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 z-10" />
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-[-4px] rounded-full border-2 border-primary/20 animate-[pulse-glow_4s_ease-in-out_infinite]" />
      </motion.div>
    );
  }

  // Animated placeholder
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-xl" />

      {/* Main circle */}
      <div className="relative w-full h-full rounded-full glass gradient-border flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 animated-gradient opacity-40" />

        {/* Initials */}
        <div className="relative z-10 text-center">
          <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient">
            AM
          </span>
          <div className="mt-2 text-xs text-muted-foreground font-mono tracking-widest uppercase">
            Photo Coming Soon
          </div>
        </div>

        {/* Decorative floating elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4"
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary/40" />
          <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 rounded-full bg-accent/40" />
        </motion.div>
      </div>

      {/* Outer decorative ring */}
      <div className="absolute inset-[-6px] rounded-full border border-primary/10" />
      <div className="absolute inset-[-12px] rounded-full border border-primary/5" />
    </motion.div>
  );
}
