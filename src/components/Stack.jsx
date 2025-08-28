"use client";

import { motion } from "motion/react";
import Container from "@/components/Container";

const logos = [
  { src: "/devicons/cplusplus-original.svg", alt: "cpp" },
  { src: "/devicons/js.svg", alt: "js" },
  { src: "/devicons/react.svg", alt: "react" },
  { src: "/devicons/ruby.svg", alt: "ruby" },
  { src: "/devicons/rails.svg", alt: "rails" },
  { src: "/devicons/python.svg", alt: "python" },
  { src: "/devicons/selenium.svg", alt: "selenium" },
  { src: "/devicons/bash.svg", alt: "bash" },
  { src: "/devicons/css.svg", alt: "css" },
  { src: "/devicons/html.svg", alt: "html" },
  { src: "/devicons/framer-motion.svg", alt: "framer-motion" },
  { src: "/devicons/next.svg", alt: "next" },
  { src: "/devicons/postgresql.svg", alt: "postgresql" },
  { src: "/devicons/tailwindcss.svg", alt: "tailwindcss" },
  { src: "/devicons/git.svg", alt: "git" },
];

function Row() {
  const DURATION = 25;

  return (
    <motion.div
      aria-hidden="true"
      className="flex shrink-0 items-center gap-6 md:gap-8 lg:gap-12"
      style={{ minWidth: "100%" }}
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        duration: DURATION,
        repeat: Infinity,
        ease: "linear",
        delay: 1.5,
      }}
    >
      {logos.map((l) => (
        <img key={l.alt} src={l.src} alt={l.alt} className="size-12" />
      ))}
    </motion.div>
  );
}

export default function Stack() {
  return (
    <Container className="overflow-clip py-12">
      <div className="bg-accent/20 py-4 [mask:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex gap-6 md:gap-12">
            <Row />
            <Row />
            <Row />
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
