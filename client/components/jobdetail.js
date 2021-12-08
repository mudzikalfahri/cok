import React from "react";
import { XIcon } from "@heroicons/react/solid";

function JobDetail({ close }) {
  return (
    <div className="w-full detailed h-screen bg-black bg-opacity-25 overflow-y-auto fixed top-0 z-30 flex justify-center">
      <div className="w-1/3 text-gray-700 text-center py-32 ">
        <div className="bg-gray-200 overflow-hidden shadow-xl relative rounded-xl pt-32">
          <button
            onClick={close}
            className="absolute p-2 m-4 rounded-full duration-100 bg-white active:bg-gray-100 top-0 right-0 ml-auto"
          >
            <XIcon className="w-4 h-4 text-gray-400" />
          </button>
          {/* detail job */}
          <div className="relative py-14 px-10 flex flex-col items-center bg-white">
            <div className="absolute -top-20">
              <div className="w-28 h-28 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://www.dailypioneer.com/uploads/2018/story/images/big/apple-s-ios-12-0-1-software-update-causing-new-issues--report-2018-10-13.jpg"
                  alt=""
                />
              </div>
            </div>
            <h4 className="text-2xl font-semibold">UX Designer</h4>
            <p className="text-left mt-2 text-sm text-gray-500">Apple. Inc</p>
            <div className="flex items-center mt-3">
              <svg
                className="w-4 h-4 text-blue-500"
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
              <p className="text-sm ml-1 text-blue-500">Jakarta, Indonesia</p>
            </div>
            <div className="flex space-x-2 mt-4 items-center pb-1">
              <div className="py-1 px-2.5 rounded-md font-medium bg-green-100/50 text-green-400 text-[11px]">
                Full-time
              </div>
              <div className="py-1 px-2.5 rounded-md bg-blue-100/50 text-blue-400 text-[11px]">
                Senior
              </div>
            </div>
            <div className="w-full mt-8 place-self-start">
              <div className="flex justify-between items-center">
                <p className="text-left text-sm font-medium">Job Description</p>
                <p className="text-xs text-blue-500">Show less</p>
              </div>
            </div>
            <p className="px-1 leading-relaxed text-justify text-xs mt-4">
              Job Descriptions: Responsible for the installation, deployment,
              debugging and troubleshooting of various types of computers,
              network communications, and office software in the company
              Responsible for the installation of computer terminal systems,
              virus checking and killing, system upgrade and backup, and
              immediate handling of network, computer and IT office equipment
              failures Responsible for the inspection and daily maintenance of
              equipment room equipment routers, servers, switches, UPS, weak
              current-related equipment Responsible for the preparation and
              training of relevant technical knowledge documents.
            </p>
            <button className="flex text-sm mt-5 items-center hover:bg-blue-600 duration-100 justify-center py-2.5 bg-blue-500 text-white rounded-lg w-full bg-blue">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
