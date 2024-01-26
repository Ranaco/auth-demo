import * as React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="w-full fixed top-0 h-[70px] backdrop-blur-lg bg-blue-300/10">
      <span className="h-full flex items-center justify-start px-4 text-3xl font-bold">
        Auth Demo
      </span>
    </div>
  );
};

export default Navbar;
