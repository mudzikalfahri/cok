import React from "react";

function Navbar({ scrolled }) {
  return (
    <div
      className={`${
        scrolled ? "bg-black backdrop-blur-xl" : ""
      } duration-200 bg-opacity-50 backdrop-filter z-30 fixed top-0 w-full`}
    >
      <div className="max-w-5xl mx-auto px-5 py-8 flex place-items-center justify-between">
        <div>
          <ul className="flex space-x-10 text-white text-sm">
            <li className="font-semibold cursor-pointer text-lghtgreen">
              Home
            </li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Games</li>
            <li className="cursor-pointer">About</li>
          </ul>
        </div>
        <div className="">
          <img src="logo.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
