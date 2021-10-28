import React from "react";

const ArrowDown = () => (
  <svg
    className="w-5 text-gray-400 h-5 self-start"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

function Navbar() {
  return (
    <div className="w-full fixed shadow-lg">
      <div className="w-full border-b border-gray-100 ">
        <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
          <div className="flex items-center text-sm font-semibold space-x-2">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <p>Seekers</p>
          </div>
          <div className="flex items-center space-x-2 ">
            <img
              src="https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              className="w-9 h-9 rounded-full object-cover"
            ></img>
            <div className="flex flex-col justify-between pr-3">
              <p className="text-[12px] font-bold">Jasmine Mat</p>
              <p className="text-[10px] text-gray-400">Seek a Job</p>
            </div>
            <ArrowDown />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-gray-100 ">
        <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
          <div className="w-2/6">
            <div className="flex space-x-3 items-center text-xs rounded-3xl p-3">
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
              <svg
                className="w-5 h-5 text-gray-400"
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
              <ArrowDown />
            </div>
            <div className="flex space-x-3 text-gray-400 items-center text-xs rounded-3xl p-3 flex-1 ">
              <button className="flex items-center w-full justify-between">
                <span>Specialization</span>
                <ArrowDown />
              </button>
            </div>
            <div className="flex space-x-3 text-gray-400 items-center text-xs rounded-3xl p-3 flex-1 ">
              <button className="flex items-center w-full justify-between">
                <span>Job Type</span>
                <ArrowDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
