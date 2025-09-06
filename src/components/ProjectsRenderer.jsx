"use client";

import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import projectsData from "@/data/projectsData";

function ProjectCard({ project, minimal }) {
  const imgThumb = project.images ? project.images[0] : "/devicons/git.svg";

  return (
    <motion.div
      initial={false}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
      className="mb-36"
      layout
    >
      <motion.div
        className="bg-surface/20 text-text/85 h-full overflow-clip rounded-lg border border-white/30 p-4 shadow-inner md:p-6 lg:p-8"
        initial={{ y: 40, opacity: 0.15 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.45 }}
      >
        <div className="flex aspect-square items-center justify-center overflow-clip rounded-lg">
          <Link
            href={`/project/${project.slug}`}
            className="relative h-full w-full"
          >
            <img
              src={imgThumb}
              alt="project-screenshot"
              className="h-full w-full object-cover object-center"
            />
          </Link>
        </div>
        <div className="mt-4 flex">
          <h1 className="text-primary flex flex-1 items-center font-serif text-xl font-bold">
            <Link href={`/project/${project.slug}`}>{project.title}</Link>
          </h1>
          <div className="flex items-center justify-end gap-2">
            {project.slug && (
              <Link
                href={`/project/${project.slug}`}
                className="bg-primary shrink-0 rounded-lg p-0.5"
              >
                <img src="/book.svg" alt="" className="size-6" />
              </Link>
            )}
            <a
              href={`https://github.com/amrxt1/${project.repo}`}
              target="_blank"
              className="bg-primary aspect-square shrink-0 rounded-lg p-0.5"
            >
              <img src="/devicons/github.svg" alt="" className="size-6" />
            </a>
            {project.preview && (
              <a
                href={project.preview}
                target="_blank"
                className="bg-primary shrink-0 rounded-lg p-0.5"
              >
                <img src="/external-link.svg" alt="" className="size-6" />
              </a>
            )}
          </div>
        </div>
        <p className="text-text/80 mt-1 text-sm md:text-base">{project.desc}</p>

        {!minimal && (
          <div className="mt-2 grid grid-cols-1 justify-center gap-x-4 text-sm">
            <div>
              <h3>
                {project.techUsed.map((t, i) => {
                  return <Badge key={i}>{t}</Badge>;
                })}
              </h3>
            </div>
            <div className="col-span-4 mt-2">
              <h3>Features:</h3>
              <ul className="text-text/70 text-xs md:text-sm">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

const ProjectsRenderer = ({ margin = false, minimal = false }) => {
  const totalTech = projectsData.map((p) => p.techUsed).flat();
  const ALL_TECH = ["all", ...new Set(totalTech)].sort();

  const [selectTech, setTech] = useState("all");

  const filteredProjects =
    selectTech === "all"
      ? projectsData
      : projectsData.filter((p) => p.techUsed.includes(selectTech));

  return (
    <Container className={`${margin ? "mt-24" : "mt-4"}`}>
      <Link href={"/project"}>
        <h1 className="text-primary font-serif text-3xl font-bold">Projects</h1>
      </Link>
      <div className="mt-4 mb-16 flex flex-wrap gap-3">
        {ALL_TECH.map((t) => (
          <button
            key={t}
            onClick={() => setTech(t)}
            className={`cursor-pointer rounded-lg px-2 ${selectTech === t ? "text-primary bg-surface flex items-center" : "text-text border-surface border"}`}
          >
            <span>{t}</span>
            {selectTech === t && (
              <span className="bg-accent text-background ml-1 rounded-full px-1 text-xs font-bold">
                {filteredProjects.length === 0
                  ? "none"
                  : filteredProjects.length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 grid-rows-[repeat(auto-fill,1fr)] gap-x-12 rounded-lg md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length === 0 ? (
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key="empty"
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ProjectCard
                project={{
                  title: "No Projects to Show",
                  techUsed: [],
                  features: [],
                }}
                headingOnly
                minimal
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} minimal={minimal} />
            ))}
          </AnimatePresence>
        )}
      </div>
    </Container>
  );
};

export default ProjectsRenderer;
