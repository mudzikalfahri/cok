import LeftSideDetail from "../components/leftsidedetail";
import Navbar from "../components/navbar";
import RightSideFind from "../components/rightsidefind";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen overflow-hidden text-gray-700">
        <div className="max-w-6xl mx-auto min-h-screen pt-52 grid grid-cols-4 space-x-3">
          <LeftSideDetail />
          <RightSideFind />
        </div>
      </div>
    </>
  );
}
