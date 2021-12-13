import toast from "react-hot-toast";

function JobCard() {
  const doApply = () => {
    toast.success("Applied Successfully", {
      style: {
        fontSize: "12px",
        padding: "16px",
        fontWeight: "500",
      },
    });
  };
  return (
    <div className="p-7 flex mx-2 my-3 flex-col bg-blue-100/20 rounded-2xl space-y-3">
      <div className="flex items-center justify-between mb-1">
        <img
          src="https://www.dailypioneer.com/uploads/2018/story/images/big/apple-s-ios-12-0-1-software-update-causing-new-issues--report-2018-10-13.jpg"
          alt="company logo"
          className="w-11 h-11 rounded-full object-cover"
        />
        <p className="text-xs text-gray-400 font-medium">10 July</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-700 font-semibold">UX Designer</h2>
        <p className="text-blue-500 text-xs font-medium">3 replies</p>
      </div>
      <div className="flex space-x-2 items-center pb-1">
        <div className="py-1 px-2.5 rounded-md font-medium bg-green-100/50 text-green-400 text-[11px]">
          Full-time
        </div>
        <div className="py-1 px-2.5 rounded-md bg-blue-100/50 text-blue-400 text-[11px]">
          Senior
        </div>
      </div>
      <p className="text-xs text-gray-700 font-semibold leading-none">
        Jakarta, Indonesia
      </p>
      <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
        We're looking for an expert Full Stack, Backend, Frontend and Blockchain
        Developers to join our team for a long term
      </p>
      <div className="flex items-center text-[11px] space-x-2 justify-between">
        <button
          onClick={doApply}
          className="flex items-center hover:bg-blue-600 duration-150 justify-center py-2.5 bg-blue-500 text-white rounded-lg w-1/2 bg-blue"
        >
          Apply
        </button>
        <button className="flex items-center justify-center py-2.5 border border-gray-500 text-gray-700 rounded-lg w-1/2 bg-blue">
          Details
        </button>
      </div>
    </div>
  );
}

export default JobCard;
