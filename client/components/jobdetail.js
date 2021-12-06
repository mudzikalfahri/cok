import React from "react";
import { XIcon } from "@heroicons/react/solid";

function JobDetail({ close }) {
  return (
    <div className="w-full min-h-screen bg-black bg-opacity-25 fixed top-0 z-30 flex justify-center">
      <div className="w-1/2 text-gray-700 mt-20 overflow-y-auto h-screen text-center relative p-10 bg-white shadow-xl rounded-xl flex flex-col items-center">
        <button
          onClick={close}
          className="absolute p-2 m-4 rounded-full duration-100 focus:bg-gray-100 top-0 right-0 ml-auto"
        >
          <XIcon className="w-4 h-4 text-gray-400" />
        </button>
        {/* detail job */}
      </div>
    </div>
  );
}

export default JobDetail;
