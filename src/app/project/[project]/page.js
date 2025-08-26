"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import projectsData from "@/data/projectsData";
import Container from "@/components/Container";

export default function Project() {
  const { project } = useParams();
  const data = projectsData[project];

  // if project doesnt exist
  if (!data) notFound();

  const images = data.img || [];
  const tech = data.tech || [];
  const feats = data.feats || [];

  return (
    <Container>
      <h1 className="text-primary mt-4 font-serif text-4xl font-bold">
        <p>{data.title}</p>
      </h1>
      <p className="text-text/90 text-lg">{data.desc}</p>

      {tech.length ? (
        <p className="text-text/50 mt-0">{data.tech.join(", ")}</p>
      ) : (
        <></>
      )}

      {images.length ? (
        <div className="mt-4">
          {data.img.map((img, i) => (
            <img src={img} key={i} className="rounded-lg" />
          ))}
        </div>
      ) : (
        <></>
      )}

      {feats.length ? (
        <div className="mt-4">
          <h1 className="text-primary font-serif text-xl font-bold">
            Features
          </h1>
          {data.feats.map((f, i) => (
            <div key={i}>{f}</div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
}
