"use client";

import Container from "@/components/Container";
import { motion } from "motion/react";

const projects = [
  {
    title: "lolcat",
    desc: "",
    img: "",
    techUsed: "",
    features: "",
    details: "",
    id: 0,
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
  return (
    <Container>
      <div className="flex gap-1">
        {ALL_TECH && ALL_TECH.map((t) => <p key={t}>{t}</p>)}
      </div>

      <h1>Projects</h1>
      {projects.map((p) => {
        return <ProjectCard project={p} key={p.id} />;
      })}
    </Container>
  );
};

export default ProjectsRenderer;
