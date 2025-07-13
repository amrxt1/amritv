"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 0, x: 10, display: "none" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full text-5xl 
                font-mono fixed flex justify-center z-10"
      >
        <p className="py-4">
          <span className="text-blue-400">amritv</span>
          <span className="text-white">.dev</span>
        </p>
      </motion.div>
      <div className="flex justify-center items-center font-mono text-5xl">
        <p className="hover:text-blue-400 text-white py-4">
          <span className="text-blue-400">amritv</span>
          <span className="">.dev</span>
        </p>
      </div>

      <div className="">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-1 w-full bg-blue-300 origin-left"
        />
      </div>
    </>
  );
}
