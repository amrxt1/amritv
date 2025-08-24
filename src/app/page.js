"use client";
import Container from "@/components/Container";
import { motion } from "motion/react";

export default function Home() {
  return (
    <Container>
      <div className="text-text/40 flex h-screen items-center justify-center">
        <motion.h1
          className="mb-24 text-2xl"
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
      </div>
    </Container>
  );
}
