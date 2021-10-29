import ArrowDown from "../components/icons/ArrowDown";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen overflow-hidden text-gray-700">
        <div className="max-w-6xl mx-auto min-h-screen pt-52 grid grid-cols-4 space-x-3">
          <div className="col-span-1">
            <h2 className="font-semibold text-lg border-b border-gray-50 mb-3 pb-3.5">
              Details
            </h2>
          </div>
          <div className="col-span-3">
            <div className="flex justify-between items-center border-b border-gray-50 mb-3 pb-1.5 ">
              <h2 className="font-semibold text-lg flex items-center mb-2">
                Recomended Job
                <span className="ml-3 text-lg font-normal text-gray-300">
                  68
                </span>
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
        </div>
      </div>
    </>
  );
}
