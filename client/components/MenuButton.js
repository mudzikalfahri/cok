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
      <div className="flex text-gray-400 items-center hover:bg-gray-50 duration-100 text-xs rounded-3xl flex-1">
        <button className="flex p-3 items-center w-full justify-between">
          <span>{name}</span>
          <ArrowDown />
        </button>
      </div>
      <div
        className={`${
          enter ? `scale-100` : `scale-0`
        } absolute duration-100 origin-top-right top-14 shadow-lg p-8 backdrop-filter backdrop-blur-xl rounded-tr-none bg-opacity-50 right-0 flex justify-center items-center rounded-2xl z-30 bg-white`}
      >
        <div className="">
          <div className="text-xs rounded-md py-1 px-2 mx-4 bg-green-50 text-green-400 my-2 ">
            Computer Networking
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuButton;
