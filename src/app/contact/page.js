"use client";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="px-32 mt-4">
      <form className="grid bg-surface">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message" rows={3} className="resize-none" />
      </form>
    </div>
  );
}
