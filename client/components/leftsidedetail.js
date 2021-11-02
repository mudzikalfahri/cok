import React from "react";

function LeftSideDetail() {
  return (
    <div className="col-span-1">
      <h2 className="font-semibold text-lg border-b border-gray-50 mb-3 pb-3.5">
        Details
      </h2>
      <div className="flex flex-col pt-3">
        <div className="pb-5">
          <div className="mb-3 font-semibold">Job Regulations</div>
          <div className="">
            <div className="text-xs cursor-pointer duration-100 hover:text-blue-500 text-gray-400 py-2 px-4 rounded-xl">
              Full time
            </div>
            <div className="text-xs cursor-pointer duration-100 hover:text-blue-500 text-gray-400 py-2 px-4 rounded-xl">
              Part time
            </div>
            <div className="text-xs cursor-pointer duration-100 hover:text-blue-500 text-gray-400 py-2 px-4 rounded-xl">
              Freelance
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="mb-3 font-semibold">Experience Level</div>
          <div className="">
            <div className="text-xs cursor-pointer font-medium duration-100 hover:text-blue-500 text-gray-400 py-2 px-4 rounded-xl">
              Junior
            </div>
            <div className="text-xs cursor-pointer font-medium duration-100 hover:text-blue-500 text-gray-400 py-2 px-4 rounded-xl">
              Middle
            </div>
            <div className="text-xs cursor-pointer font-medium duration-100 hover:text-blue-500 text-gray-400 py-2 px-4 rounded-xl">
              Senior
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideDetail;
