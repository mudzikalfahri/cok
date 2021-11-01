import React from "react";
import ArrowDown from "./icons/arrowdown";
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
            <ArrowDown />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3">
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
