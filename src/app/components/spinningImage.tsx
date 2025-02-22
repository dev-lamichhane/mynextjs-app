"use client";
import { motion } from "framer-motion";
import bryce from "../../../public/bryce.webp";

export default function SpinningImage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.img
        src={bryce.src}
        alt="Spinning Image"
        className="w-48 h-48"
        initial={{ scale: 1, opacity: 1, rotate: 0 }}
        animate={{ scale: 0, opacity: 0, rotate: 360 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay:1,
        }}
      />
    </div>
  );
}
