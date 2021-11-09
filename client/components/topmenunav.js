import { useState } from "react";
import React from "react";
const menus = ["Seek", "Post a Job", "Saved", "Applied"];

function TopMenuNav({ setModalOpen }) {
  const [active, setActive] = useState(0);
  return (
    <div className={`flex items-center relative`}>
      <button
        onClick={() => setActive(0 * 80)}
        className={`text-xs w-[80px] flex justify-center duration-75 cursor-pointer py-8  ${
          active / 80 === 0
            ? "text-gray-700 font-medium"
            : "font-normal text-gray-400"
        }`}
      >
        Seek
      </button>
      <button
        onClick={() => {
          setActive(1 * 80);
          setModalOpen(true);
        }}
        className={`text-xs w-[80px] flex justify-center duration-75 cursor-pointer py-8  ${
          active / 80 === 1
            ? "text-gray-700 font-medium"
            : "font-normal text-gray-400"
        }`}
      >
        Post a Job
      </button>
      <button
        onClick={() => setActive(2 * 80)}
        className={`text-xs w-[80px] flex justify-center duration-75 cursor-pointer py-8  ${
          active / 80 === 2
            ? "text-gray-700 font-medium"
            : "font-normal text-gray-400"
        }`}
      >
        Saved
      </button>
      <button
        onClick={() => setActive(3 * 80)}
        className={`text-xs w-[80px] flex justify-center duration-75 cursor-pointer py-8  ${
          active / 80 === 3
            ? "text-gray-700 font-medium"
            : "font-normal text-gray-400"
        }`}
      >
        Applied
      </button>
      <div
        style={{ left: active }}
        className={`w-[80px] duration-200 ease-in-out bottom-0 h-0.5 bg-blue-500 absolute`}
      ></div>
    </div>
  );
}

export default TopMenuNav;
