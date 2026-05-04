import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white w-full">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        
        <button className="text-white bg-green-800 my-5 rounded-full flex  justify-center items-center ring-1 ring-white">
        <img className="p-1 w-10 invert" src="icons/github.svg" alt="" />
        <span className="font-bold px-2">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
