import React from "react";
import { SparklesIcon, CloudUploadIcon, XIcon } from "@heroicons/react/solid";

function PostModal({ close }) {
  return (
    <div className="w-full h-screen bg-black bg-opacity-25 fixed top-0 z-30 flex justify-center items-center">
      <div className="w-1/3 text-gray-700 text-center relative p-10 bg-white shadow-xl rounded-xl flex flex-col items-center">
        <button
          onClick={close}
          className="absolute p-2 m-4 rounded-full duration-100 focus:bg-gray-100 top-0 right-0 ml-auto"
        >
          <XIcon className="w-4 h-4 text-gray-400" />
        </button>
        <h1 className="font-medium mt-4 flex items-center">
          Post a Job{" "}
          <span>
            <SparklesIcon className="ml-1 w-4 h-4 text-blue-500" />
          </span>
        </h1>
        <p className="text-xs text-gray-400 mt-2 px-2">
          Fill these input field and get the best employees around the world
        </p>
        <form action="w-full">
          <input
            type="text"
            name="username"
            placeholder="Job Title"
            required
            className="bg-white outline-none border-blue-500 border rounded-lg mt-4 w-full text-xs py-3 px-4  "
          />
          <textarea
            name="username"
            placeholder="Description"
            required
            className="bg-white outline-none border-blue-500 border rounded-lg mt-4 w-full text-xs py-3 px-4  "
          />
          <button
            type="submit"
            className="py-2 flex justify-center items-center text-center relative bottom-0 hover:bg-blue-600 duration-200 cursor-pointer text-white mt-4 rounded-md text-sm w-full bg-blue-500"
          >
            Post Now
            <span>
              <CloudUploadIcon className="ml-2 w-5 h-5 text-white" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostModal;
