import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import ProjectsRenderer from "@/components/ProjectsRenderer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <ProjectsRenderer margin />
      <Footer />
    </>
  );
}
