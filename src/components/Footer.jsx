import Container from "@/components/Container";

const Footer = () => {
  return (
    <Container className={"mt-72 pb-4"}>
      <footer className="relative text-center">
        <div className="bg-primary/40 absolute -bottom-7 left-1/2 -z-10 size-30 -translate-x-1/2 rounded-full blur-3xl" />
        <p>2025 Amritveer Singh</p>
        <a
          href="https://github.com/amrxt1"
          target="_blank"
          className="text-primary font-bold"
        >
          View Source
        </a>
      </footer>
    </Container>
  );
};

export default Footer;
