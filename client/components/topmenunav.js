import { useState } from "react";
import React from "react";
const menus = ["Seek", "Post a Job", "Saved", "Applied"];

function TopMenuNav() {
  const [active, setActive] = useState(0);
  return (
    <div
      className={`flex items-center before:content-[''] before:duration-200 before:w-[80px] before:left-0 before:h-0.5 before:bg-blue-500 before:absolute relative before:left-[${
        active + "px"
      }] before:bottom-0`}
    >
      {menus.map((menu, idx) => (
        <button
          onClick={() => setActive(idx * 80)}
          key={idx}
          className={`text-xs w-[80px] flex justify-center cursor-pointer py-8  ${
            active / 80 === idx
              ? "text-gray-700 font-medium"
              : "font-normal text-gray-400"
          }`}
        >
          {menu}
        </button>
      ))}
    </div>
  );
}

export default TopMenuNav;
