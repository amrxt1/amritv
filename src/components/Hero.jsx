"use client";

import Container from "@/components/Container";
import { motion } from "motion/react";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <Container className="flex-1">
      <div className="text-text/90 flex h-full flex-col justify-center gap-4 font-serif">
        <motion.h1
          className="text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div>
            <span className="text-primary text-5xl">amritv[eer&apos;s]</span>
            <span>.space </span>
          </div>
          <span>on the internet</span>
        </motion.h1>
        <motion.div
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          I hex bits into{" "}
          <Typewriter
            text="idk what but smth ig"
            className="text-primary"
            speed={200}
          />
        </motion.div>
      </div>
    </Container>
  );
}
