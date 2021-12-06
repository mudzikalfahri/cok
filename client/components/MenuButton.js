import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

function MenuButton({ name }) {
  const [enter, setIsEnter] = useState(false);
  const toggle = () => setIsEnter((prev) => !prev);
  return (
    <div
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      className="flex-1 relative"
    >
      <div
        className={`flex border-2 items-center duration-100 text-xs rounded-xl ${
          enter
            ? " border-gray-100 text-gray-600"
            : "border-white  text-gray-400 "
        }`}
      >
        <button className="flex p-3 items-center w-full justify-between">
          <span>{name}</span>
          <ChevronDownIcon className="w-5 h-5 text-blue-400" />
        </button>
      </div>
      <div
        className={`${
          enter ? `scale-100 opacity-100` : `scale-50 opacity-0`
        } absolute border border-gray-100 w-full rounded-xl duration-75 top-13 origin-top shadow-lg py-3 px-1 right-0 flex justify-center items-center rounded- z-30 bg-white`}
      >
        <div className="">
          <div className="text-xs w-max py-1 px-2 mx-4 border-b border-gray-300 my-2 ">
            Computer Networking
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuButton;
