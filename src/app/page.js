"use client";
import { motion } from "motion/react";

export default function Home() {
    return (
        <>  
            <motion.div
                animate={{ opacity: 0, display: "none"}}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="w-full h-[100vh] text-5xl 
                font-mono fixed flex justify-center items-center bg-gray-300 z-10"
                >
                <motion.p
                    animate={{ scale: 0.99 }}
                    transition={{ duration: 0.7 }}
                    >
                    <span className="text-blue-500">amritv</span>
                    <span className="text-black">.dev</span>
                </motion.p>
            </motion.div>
            <div className="flex justify-center items-center font-mono h-[100vh] text-5xl">
                <p className="hover:text-blue-400 text-white">
                    <span className="text-blue-400">amritv</span>
                    <span className="">.dev</span>
                </p>
            </div>
        </>
    );
}
