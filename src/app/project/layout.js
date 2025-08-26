"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

import Container from "@/components/Container";

export default function ProjectsLayout({ children }) {
  const { project } = useParams();
  const onDetail = Boolean(project);
  console.log(onDetail);
  return (
    <>
      <Container className="sticky top-0 z-50 py-3">
        <div className="absolute inset-0 -z-10 bg-white/2 backdrop-blur-lg [mask:linear-gradient(to_top,transparent,black)]" />
        <nav className="flex justify-center">
          <div className="text-text/70 shadow-surface flex min-w-[40%] justify-center gap-4 rounded-full border border-white/30 bg-white/5 px-8 py-1 shadow-inner backdrop-blur-[3px]">
            <Link href={"/"}>home</Link>
            <Link
              href="/project"
              className={
                onDetail ? "" : "text-primary pointer-events-none font-bold"
              }
            >
              projects
            </Link>
          </div>
        </nav>
      </Container>
      {children}
    </>
  );
}
