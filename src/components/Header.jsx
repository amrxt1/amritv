"use client";

import Container from "@/components/Container";
import Link from "next/link";

import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    title: "home",
  },
  {
    href: "/project",
    title: "projects",
  },
  {
    href: "/contact",
    title: "contact",
  },
];

export default function Header() {
  const path = usePathname();

  return (
    <>
      <Container className="fixed top-0 z-50 w-full py-3">
        <div className="absolute inset-0 -z-10 backdrop-blur-[8px] [mask:linear-gradient(to_top,transparent,black)]" />{" "}
        <nav className="flex justify-center">
          <div className="text-text/70 shadow-surface flex min-w-[40%] justify-center gap-4 rounded-full border border-white/30 bg-black/5 px-8 py-1 shadow-inner backdrop-blur-[3px]">
            {navLinks.map((l, i) => (
              <Link
                href={l.href}
                key={i}
                className={l.href === path ? "text-primary font-bold" : ""}
              >
                {l.title}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </>
  );
}
