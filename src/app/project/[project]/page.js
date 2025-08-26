"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import projectsData from "@/data/projectsData";

export default function Project() {
  const { project } = useParams();
  const data = projectsData[project];
  console.log(projectsData);
  if (!data) notFound();

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
