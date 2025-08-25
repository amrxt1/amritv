"use client";

import Container from "@/components/Container";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <Container>
      <div className="text-text/50 flex h-[70vh] flex-col justify-center gap-4 font-serif">
        <motion.h1
          className="text-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <span className="text-primary text-5xl">amritv[eer&apos;s]</span>
            <span>.space </span>
          </div>
          <span>on the internet</span>
        </motion.h1>
        <motion.div
          className="text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I hex bits into cpu(s) and webapps.
        </motion.div>
      </div>
    </Container>
  );
}
