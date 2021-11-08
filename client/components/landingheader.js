import React from "react";
import { SearchCircleIcon } from "@heroicons/react/solid";

function LandingHeader({ style }) {
  return (
    <div
      className={`${
        style ? "-top-20" : "top-0"
      } bg-white w-full fixed z-30 py-6 duration-300 ease-in-out border-b text-gray-700 border-gray-200 px-12`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <SearchCircleIcon className="w-7 h-7 text-blue-500" />
          <p className="font-semibold">Jobhunter</p>
        </div>
        <ul className="flex text-lg font-medium text-gray-500 items-center space-x-6">
          <li className="hover:text-gray-400 duration-100 cursor-pointer">
            Who We Are
          </li>
          <li className="hover:text-gray-400 duration-100 cursor-pointer">
            What We Build
          </li>
          <li className="hover:text-gray-400 duration-100 cursor-pointer">
            How to Use
          </li>
          <li className="hover:text-gray-400 duration-100 cursor-pointer">
            Log In
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingHeader;
