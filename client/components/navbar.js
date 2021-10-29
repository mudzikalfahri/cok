import React from "react";
import ArrowDown from "./icons/ArrowDown";
import LogoIcon from "./icons/LogoIcon";
import MenuButton from "./menubutton";

function Navbar() {
  return (
    <div className="w-full fixed shadow-lg bg-white z-20">
      <div className="w-full border-b border-gray-100 ">
        <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
          <div className="flex items-center text-gray-700 text-sm font-semibold space-x-2">
            <LogoIcon />
            <p>Seekers</p>
          </div>

          <div className="flex items-center space-x-2 ">
            <img
              src="https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              className="w-9 h-9 rounded-full object-cover"
            ></img>
            <div className="flex flex-col justify-between pr-3">
              <p className="text-[12px] text-gray-700 font-bold">Jasmine Mat</p>
              <p className="text-[10px] text-gray-400">Seek a Job</p>
            </div>
            <ArrowDown />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-gray-100 ">
        <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
          <div className="w-2/6">
            <div className="flex space-x-3 items-center text-xs rounded-3xl py-3">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search a Job"
                className="outline-none first-letter:capitalize w-2/3"
              />
            </div>
          </div>
          <div className="w-4/6 flex items-center justify-between space-x-1">
            <div className="flex space-x-3 items-center text-xs rounded-3xl flex-1 p-3">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Work Location"
                  className="outline-none first-letter:capitalize"
                />
              </div>
              <ArrowDown />
            </div>
            <MenuButton name="Job Type" />
            <MenuButton name="Specialization" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
