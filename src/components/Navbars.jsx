import React from "react";
import logo from "../context/logo.png";
import nav from "../context/nav.png";

const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center p-4 rounded"
      style={{
        background: "linear-gradient(to right, #E8F5F8, #E8F5F800)",
      }}
      >
      <div>
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      <div>
        <img src={nav} alt="Navigation" className="h-6 w-auto" />
      </div>
    </div>
  );
};

export default Navbar;
