const Container = ({ children, className }) => {
  return <section className={`px-4 ${className}`}>{children}</section>;
};

export default Container;
