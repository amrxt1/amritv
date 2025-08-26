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
        <div className="absolute inset-0 -z-10 bg-none backdrop-blur-2xl [mask:linear-gradient(to_top,transparent_0%,black_100%)]" />
        <nav className="flex justify-center">
          <div className="bg-surface text-text/70 flex min-w-[40%] justify-center gap-4 rounded-full px-8 py-1">
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
