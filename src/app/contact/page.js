"use client";
import { motion } from "motion/react";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Contact() {
  return (
    <Container className="mt-24">
      <ContactForm />
      <div className="mt-24 flex w-full justify-center">
        <div className="bg-surface flex w-fit justify-center gap-4 rounded-lg p-4">
          <Link href={"https://github.com/amrxt1"}>
            <img src="/devicons/github.svg" alt="" className="size-16" />
          </Link>
          <Link href={"https://github.com/amrxt1"}>
            <img src="/devicons/linkedin.svg" alt="" className="size-16" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
