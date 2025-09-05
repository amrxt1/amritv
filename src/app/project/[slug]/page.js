"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import projectsData from "@/data/projectsData";
import Container from "@/components/Container";

export default function Project() {
  const { slug } = useParams();
  console.log(slug);
  const data = projectsData.find((project) => project.slug === slug);

  // if project doesnt exist
  if (!data) notFound();

  const {
    title = "",
    desc = "",
    techUsed = "",
    images = [],
    features = [],
    details = "",
  } = data;

  return (
    <Container className="pt-12">
      <h1 className="text-primary mt-4 font-serif text-4xl font-bold">
        <p>{title}</p>
      </h1>
      <p className="text-text/90 text-lg">{desc}</p>

      {techUsed.length ? (
        <p className="text-text/50 mt-0">{techUsed.join(", ")}</p>
      ) : (
        <></>
      )}

      {images.length ? (
        <div className="mt-4">
          {images.map((img, i) => (
            <img src={img} key={i} className="rounded-lg" />
          ))}
        </div>
      ) : (
        <></>
      )}

      {features.length ? (
        <div className="mt-4">
          <h3 className="text-primary font-serif text-xl font-bold">
            Features
          </h3>
          {features.map((f, i) => (
            <div key={i}>{f}</div>
          ))}
        </div>
      ) : (
        <></>
      )}

      {details.length && (
        <div className="mt-4">
          <h3 className="text-primary font-serif text-xl font-bold">Details</h3>
          <p>{details}</p>
        </div>
      )}
    </Container>
  );
}
