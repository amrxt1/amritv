"use client";

import { useState, useEffect } from "react";

const Typewriter = ({ text = "", speed = 50, className = "" }) => {
  const [showText, setShowText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setShowText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setShowText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span className={className}>{showText}</span>;
};

export default Typewriter;
