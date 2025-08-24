"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center text-text/40">
        <motion.h1
          className="text-3xl mb-24"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-6xl text-primary">amritv[eer&apos;s]</span>
          .space of the internet
        </motion.h1>
      </div>
    </>
  );
}
