import React from "react";
import ArrowDown from "./icons/ArrowDown";

function MenuButton({ name }) {
  return (
    <div className="flex space-x-3 text-gray-400 items-center hover:bg-gray-50 duration-100 text-xs rounded-3xl flex-1">
      <button className="flex items-center w-full justify-between">
        <span>{name}</span>
        <ArrowDown />
      </button>
    </div>
  );
}

export default MenuButton;
