import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";
import JobCard from "./jobcard";

function RightSideFind() {
  return (
    <div className="col-span-3">
      <div className="flex justify-between items-center border-b border-gray-50 mb-3 pb-1.5 ">
        <h2 className="font-semibold text-lg flex items-center mb-2">
          Recomended Job
          <span className="ml-3 text-lg font-normal text-gray-300">68</span>
        </h2>
        <div className="flex items-center text-xs">
          <p className="text-gray-400 mr-2">Sort by</p>
          <button className="font-medium text-blue-500 flex items-center">
            Last posted
            <ChevronDownIcon className="w-5 h-5 text-blue-400" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}

export default RightSideFind;
