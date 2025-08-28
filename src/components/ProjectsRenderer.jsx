"use client";

import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "armV7",
    desc: "A lightweight ARMv7 CPU core implemented in Verilog.",
    img: "/project-images/armv7.png",
    techUsed: ["verilog"],
    features: [
      "Implements instruction fetch, decode, and ALU pipeline",
      "Supports a subset of ARM instructions",
      "Simulated in ModelSim",
    ],
    details:
      "Built for a computer architecture course. The CPU supports a subset of ARM instructions and was verified against test benches.",
    repo: "armv7",
    preview: "https://armv7.vercel.app",
    more: "armv7",
  },
  {
    id: 2,
    title: "CCHive-Frontend",
    desc: "Frontend web app for the CCHive project.",
    techUsed: ["js"],
    features: [
      "Single Page App built with React",
      "Responsive project dashboards",
      "Real-time messaging UI",
    ],
    details:
      "Built with React and Tailwind. Integrates with the backend to provide a smooth student collaboration experience.",
    repo: "cchive_frontend",
    preview: "https://cchive.vercel.app",
  },

  {
    id: 0,
    title: "CCHive-Backend",
    desc: "Backend services for a student collaboration platform.",
    techUsed: ["ruby"],
    features: [
      "REST API with authentication",
      "PostgreSQL persistence",
      "Messaging and collaboration endpoints",
    ],
    details:
      "Developed in Ruby on Rails. Provides backend services for the CCHive platform.",
    repo: "cchive_backend",
  },
  {
    id: 3,
    title: "Assembler",
    desc: "A custom assembler for a teaching CPU architecture.",
    techUsed: ["asm"],
    features: [
      "Parses custom assembly language",
      "Supports labels and pseudo-ops",
      "Outputs machine code",
    ],
    details:
      "Assembler toolchain written for a course CPU simulator, providing human-readable to binary translation.",
    repo: "armv7/tree/main/asm",
  },
  {
    id: 4,
    title: "Fire Hall Events",
    desc: "Website to manage and display upcoming community events.",
    techUsed: ["js"],
    features: [
      "Interactive event calendar",
      "RSVP system",
      "Admin panel for event management",
    ],
    details:
      "Built with React and Firebase. Designed for a local fire hall to organize and publish community events.",
    repo: "fire-hall-events",
    preview: "https://fire-hall-events.vercel.app",
  },
  {
    id: 5,
    title: "QuickMove Solutions",
    desc: "Logistics and moving services booking platform.",
    techUsed: ["js"],
    features: [
      "Booking system for moving services",
      "Cost estimation calculator",
      "Live chat with service providers",
    ],
    details:
      "MERN stack app connecting customers with moving crews, featuring real-time updates.",
    repo: "junk-removal-demo",
    preview: "https://junk-removal-demo.vercel.app",
  },
  {
    id: 6,
    title: "shiftBOT",
    desc: "A scheduling assistant bot for shift-based jobs.",
    techUsed: ["python"],
    features: [
      "Generates optimal shift rotations",
      "Conflict resolution algorithm",
      "Automatic reminders",
    ],
    details:
      "Written in Python with scheduling algorithms to minimize conflicts and ensure fairness.",
    repo: "shiftBOT",
  },
  {
    id: 7,
    title: "Applications BOT",
    desc: "Discord bot for handling internship applications.",
    techUsed: ["python"],
    features: [
      "Collects and validates form submissions",
      "Automated replies to applicants",
      "Exports data to CSV",
    ],
    details:
      "Built with discord.py. Simplified application intake for a student club.",
    repo: "amazon-jobs-bot",
  },
  {
    id: 8,
    title: "Project: Facebook",
    desc: "Recreation of early Facebook features for learning purposes.",
    techUsed: ["ruby"],
    features: [
      "Profiles with friend requests",
      "Posting and commenting system",
      "Basic news feed",
    ],
    details:
      "Ruby on Rails project mimicking early Facebook core features. Built to practice scalable app design.",
    repo: "project_facebook",
    preview: "https://project-facebook.fly.dev/",
  },
  {
    id: 9,
    title: "CS-120",
    desc: "Collection of course projects for CS-120.",
    techUsed: ["python"],
    features: [
      "Sorting algorithm implementations",
      "Search algorithms",
      "Simulation models",
    ],
    details:
      "Assignments covering core algorithms and data structures, packaged into one repo.",
    repo: "csci-120",
  },
];

const ALL_TECH = [
  "all",
  "verilog",
  "asm",
  "c",
  "cpp",
  "ruby",
  "js",
  "python",
  "misc",
];

function ProjectCard({ project, minimal, headingOnly }) {
  if (headingOnly)
    return (
      <motion.div
        exit={{ opacity: 0, y: -20, scale: 0.75 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
        className="mb-24"
        layout
      >
        <motion.div
          className="bg-surface/20 text-text/85 aspect-square h-full overflow-clip rounded-lg border border-white/30 p-4 shadow-inner md:p-6 lg:p-8"
          initial={{ y: 40, opacity: 0.15 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.45 }}
        >
          <h1 className="text-primary items-center text-center font-serif text-xl font-bold">
            {project.title}
          </h1>
        </motion.div>
      </motion.div>
    );

  return (
    <motion.div
      exit={{ opacity: 0, y: -20, scale: 0.75 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
      className="mb-24"
      layout
    >
      <motion.div
        className="bg-surface/20 text-text/85 h-full overflow-clip rounded-lg border border-white/30 p-4 shadow-inner md:p-6 lg:p-8"
        initial={{ y: 40, opacity: 0.15 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.45 }}
      >
        <div className="flex">
          <h1 className="text-primary flex flex-1 items-center font-serif text-xl font-bold">
            <Link
              href={
                project.more
                  ? `/project/${project.more}`
                  : project.preview ||
                    `https://github.com/amrxt1/${project.repo}`
              }
            >
              {project.title}
            </Link>
          </h1>
          <div className="flex items-center justify-end gap-2">
            {project.more && (
              <Link
                href={`/project/${project.more}`}
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
        <p className="mt-1 text-sm">{project.desc}</p>
        <div className="mt-4 flex aspect-square items-center justify-center overflow-clip rounded-lg">
          <Link
            href={
              project.more
                ? `/project/${project.more}`
                : project.preview || `https://github.com/amrxt1/${project.repo}`
            }
            className="h-full w-full object-cover object-top"
          >
            <img
              src={project.img || "/devicons/git.svg"}
              alt="project-screenshot"
            />
          </Link>
        </div>
        {!minimal && (
          <div className="mt-4 grid grid-cols-1 justify-center gap-x-4 text-sm">
            <div>
              <h3>
                {project.techUsed.map((t, i) => {
                  return <Badge key={i}>{t}</Badge>;
                })}
              </h3>
            </div>
            <div className="col-span-4 mt-2">
              <h3>Features:</h3>
              <ul className="text-text/70 text-xs">
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
  const [selectTech, setTech] = useState("all");

  const filteredProjects =
    selectTech === "all"
      ? projects
      : projects.filter((p) => p.techUsed.includes(selectTech));

  return (
    <Container className={`${margin ? "mt-24" : "mt-4"}`}>
      <Link href={"/project"}>
        <h1 className="text-primary font-serif text-3xl font-bold">Projects</h1>
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        {ALL_TECH.map((t) => (
          <button
            key={t}
            onClick={() => setTech(t)}
            className={`${selectTech === t ? "text-primary bg-surface flex items-center rounded-lg px-2 font-bold" : "text-text/70"}`}
          >
            <span>{t}</span>
            {selectTech === t && (
              <span className="bg-accent text-background ml-1 rounded-full px-1 text-xs">
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
