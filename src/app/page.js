import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import ProjectsRenderer from "@/components/ProjectsRenderer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex h-screen min-h-[500px] flex-col justify-center">
        <Hero />
        <Stack />
      </div>
      <ProjectsRenderer minimal margin />
      <Footer />
    </>
  );
}
