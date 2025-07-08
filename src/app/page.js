"use client";
import { motion } from "motion/react";

export default function Home() {
    return (
        <>
            <motion.div
                animate={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="w-full h-[100vh] text-5xl 
        font-mono fixed flex justify-center items-center bg-gray-300"
            >
                <motion.p
                    animate={{ scale: 0.96 }}
                    transition={{ duration: 1.1 }}
                    className="hover:text-blue-400"
                >
                    <span className="text-blue-400">amritv</span>
                    <span className="text-black">.dev</span>
                </motion.p>
            </motion.div>
            <div class="flex justify-center items-center font-mono">
                amritv.dev
            </div>
        </>
    );
}
