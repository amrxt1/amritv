const Container = ({ children, className = "" }) => {
  return (
    <section className={`px-4 md:px-16 lg:px-32 xl:px-64 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
