"use client";

import Container from "@/components/Container";
import { motion } from "motion/react";
import { useState } from "react";

const projects = [
  {
    id: 0,
    title: "armV7",
    desc: "A lightweight ARMv7 CPU core implemented in Verilog.",
    img: "/images/projects/armv7.png",
    techUsed: ["verilog"],
    features: [
      "Implements instruction fetch, decode, and ALU pipeline",
      "Supports a subset of ARM instructions",
      "Simulated in ModelSim",
    ],
    details:
      "Built for a computer architecture course. The CPU supports a subset of ARM instructions and was verified against test benches.",
  },
  {
    id: 1,
    title: "CCHive-Backend",
    desc: "Backend services for a student collaboration platform.",
    img: "/images/projects/cchive-backend.png",
    techUsed: ["ruby"],
    features: [
      "REST API with authentication",
      "PostgreSQL persistence",
      "Messaging and collaboration endpoints",
    ],
    details:
      "Developed in Ruby on Rails. Provides backend services for the CCHive platform.",
  },
  {
    id: 2,
    title: "CCHive-Frontend",
    desc: "Frontend web app for the CCHive project.",
    img: "/images/projects/cchive-frontend.png",
    techUsed: ["js"],
    features: [
      "Single Page App built with React",
      "Responsive project dashboards",
      "Real-time messaging UI",
    ],
    details:
      "Built with React and Tailwind. Integrates with the backend to provide a smooth student collaboration experience.",
  },
  {
    id: 3,
    title: "Assembler",
    desc: "A custom assembler for a teaching CPU architecture.",
    img: "/images/projects/assembler.png",
    techUsed: ["asm"],
    features: [
      "Parses custom assembly language",
      "Supports labels and pseudo-ops",
      "Outputs machine code",
    ],
    details:
      "Assembler toolchain written for a course CPU simulator, providing human-readable to binary translation.",
  },
  {
    id: 4,
    title: "Fire Hall Events",
    desc: "Website to manage and display upcoming community events.",
    img: "/images/projects/firehall.png",
    techUsed: ["js"],
    features: [
      "Interactive event calendar",
      "RSVP system",
      "Admin panel for event management",
    ],
    details:
      "Built with React and Firebase. Designed for a local fire hall to organize and publish community events.",
  },
  {
    id: 5,
    title: "QuickMove Solutions",
    desc: "Logistics and moving services booking platform.",
    img: "/images/projects/quickmove.png",
    techUsed: ["js"],
    features: [
      "Booking system for moving services",
      "Cost estimation calculator",
      "Live chat with service providers",
    ],
    details:
      "MERN stack app connecting customers with moving crews, featuring real-time updates.",
  },
  {
    id: 6,
    title: "shiftBOT",
    desc: "A scheduling assistant bot for shift-based jobs.",
    img: "/images/projects/shiftbot.png",
    techUsed: ["python"],
    features: [
      "Generates optimal shift rotations",
      "Conflict resolution algorithm",
      "Automatic reminders",
    ],
    details:
      "Written in Python with scheduling algorithms to minimize conflicts and ensure fairness.",
  },
  {
    id: 7,
    title: "Applications BOT",
    desc: "Discord bot for handling internship applications.",
    img: "/images/projects/applications-bot.png",
    techUsed: ["python"],
    features: [
      "Collects and validates form submissions",
      "Automated replies to applicants",
      "Exports data to CSV",
    ],
    details:
      "Built with discord.py. Simplified application intake for a student club.",
  },
  {
    id: 8,
    title: "Project: Facebook",
    desc: "Recreation of early Facebook features for learning purposes.",
    img: "/images/projects/fb-clone.png",
    techUsed: ["ruby"],
    features: [
      "Profiles with friend requests",
      "Posting and commenting system",
      "Basic news feed",
    ],
    details:
      "Ruby on Rails project mimicking early Facebook core features. Built to practice scalable app design.",
  },
  {
    id: 9,
    title: "CS-120",
    desc: "Collection of course projects for CS-120.",
    img: "/images/projects/cs120.png",
    techUsed: ["python"],
    features: [
      "Sorting algorithm implementations",
      "Search algorithms",
      "Simulation models",
    ],
    details:
      "Assignments covering core algorithms and data structures, packaged into one repo.",
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

function ProjectCard({ project }) {
  return (
    <div className="bg-surface/50 text-text/85 mb-16 space-y-4 rounded-lg p-4">
      <div className="grid grid-cols-2">
        <h1 className="text-primary flex items-center text-lg font-bold">
          {project.title}
        </h1>
        <div className="flex items-center justify-end">
          <a
            href="#"
            className="bg-primary text-background rounded-lg px-2 py-1 font-bold"
          >
            View Source
          </a>
        </div>
      </div>
      <p className="text-sm">{project.desc}</p>
      <div className="grid grid-cols-2 gap-x-4">
        <img src="/devicons/git.svg" alt="project-screenshot" />
        <div className="text-sm">
          <div>
            <h3>Tech: </h3>
            <div className="text-text/70 text-xs">
              {project.techUsed.join(", ")}
            </div>
          </div>
          <div>
            <h3>Features:</h3>
            <ul className="text-text/70 text-xs">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectsRenderer = () => {
  const [selectTech, setTech] = useState("all");

  const filteredProjects =
    selectTech === "all"
      ? projects
      : projects.filter((p) => p.techUsed.includes(selectTech));

  return (
    <Container className={"mt-48"}>
      <h1 className="text-primary font-serif text-3xl">Projects</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {ALL_TECH.map((t) => (
          <button
            key={t}
            onClick={() => setTech(t)}
            className={`${selectTech === t ? "text-primary bg-surface rounded-lg px-2 font-bold" : "text-text/70"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="border-surface mt-4 rounded-lg border-2 p-4 pt-16">
        {filteredProjects.length === 0 ? (
          <div className="text-text/50 pb-16 text-center text-xl italic">
            No projects to show.
          </div>
        ) : (
          filteredProjects.map((p) => {
            return <ProjectCard key={p.id} project={p} />;
          })
        )}
      </div>
    </Container>
  );
};

export default ProjectsRenderer;
