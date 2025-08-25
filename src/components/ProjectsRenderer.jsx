"use client";

import Container from "@/components/Container";
import { motion } from "motion/react";
import { useState } from "react";

const projects = [
  {
    title: "armV7",
    desc: "",
    img: "",
    techUsed: ["verilog"],
    features: "",
    details: "",
    id: 0,
  },
  {
    title: "CCHive-Backend",
    desc: "",
    img: "",
    techUsed: ["ruby"],
    features: "",
    details: "",
    id: 1,
  },
  {
    title: "CCHive-Frontend",
    desc: "",
    img: "",
    techUsed: ["js"],
    features: "",
    details: "",
    id: 2,
  },
  {
    title: "Assembler",
    desc: "",
    img: "",
    techUsed: ["asm"],
    features: "",
    details: "",
    id: 3,
  },
  {
    title: "Fire Hall Events",
    desc: "",
    img: "",
    techUsed: ["js"],
    features: "",
    details: "",
    id: 4,
  },
  {
    title: "QuickMove Solutions",
    desc: "",
    img: "",
    techUsed: ["js"],
    features: "",
    details: "",
    id: 5,
  },
  {
    title: "shiftBOT",
    desc: "",
    img: "",
    techUsed: ["python"],
    features: "",
    details: "",
    id: 6,
  },
  {
    title: "Applications BOT",
    desc: "",
    img: "",
    techUsed: ["python"],
    features: "",
    details: "",
    id: 7,
  },
  {
    title: "Project: Facebook",
    desc: "",
    img: "",
    techUsed: ["ruby"],
    features: "",
    details: "",
    id: 8,
  },
  {
    title: "CS-120",
    desc: "",
    img: "",
    techUsed: ["python"],
    features: "",
    details: "",
    id: 9,
  },
];

function ProjectCard({ project }) {
  return <div>{project.title}</div>;
}

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

const ProjectsRenderer = () => {
  const [selectTech, setTech] = useState("all");

  const filteredProjects =
    selectTech === "all"
      ? projects
      : projects.filter((p) => p.techUsed.includes(selectTech));

  return (
    <Container>
      <div className="flex w-full justify-around gap-1">
        {ALL_TECH &&
          ALL_TECH.map((t) => (
            <button
              key={t}
              onClick={(e) => {
                e.preventDefault();
                setTech(t);
              }}
            >
              {t}
            </button>
          ))}
      </div>
      <div className="bg-surface mt-4 rounded-lg p-4">
        <h1 className="text-primary font-bold">Projects</h1>
        {filteredProjects.map((p) => {
          return <ProjectCard key={p.id} project={p} />;
        })}
      </div>
    </Container>
  );
};

export default ProjectsRenderer;
