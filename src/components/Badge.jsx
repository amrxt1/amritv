const Badge = ({ children }) => {
  return (
    <div className="bg-surface text-accent w-fit rounded-full px-4 py-1 font-bold">
      {children}
    </div>
  );
};

export default Badge;
