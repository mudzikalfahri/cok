import { useState } from "react";
import ArrowDown from "./icons/arrowdown";

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
        className={`flex border-2 items-center duration-100 text-xs rounded-3xl ${
          enter
            ? " border-gray-300 text-gray-600"
            : "border-white  text-gray-400 "
        }`}
      >
        <button className="flex p-3 items-center w-full justify-between">
          <span>{name}</span>
          <ArrowDown />
        </button>
      </div>
      <div
        className={`${
          enter ? `scale-100` : `scale-0`
        } absolute duration-75 top-13 origin-top shadow-lg p-8 right-0 flex justify-center items-center rounded- z-30 bg-white`}
      >
        <div className="">
          <div className="text-xs py-1 px-2 mx-4 border-b border-gray-300 my-2 ">
            Computer Networking
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuButton;
