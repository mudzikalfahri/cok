import { useEffect, useState } from "react";
import LeftSideDetail from "../components/leftsidedetail";
import Navbar from "../components/navbar";
import RightSideFind from "../components/rightsidefind";

export default function Find() {
  const [style, setStyle] = useState(false);
  const [last, setLast] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [last]);
  const handleScroll = () => {
    let currentScrollY = window.scrollY;
    console.log(last);
    if (currentScrollY > last) {
      setStyle(true);
    } else {
      setStyle(false);
    }
    setLast(currentScrollY);
  };
  return (
    <>
      <Navbar style={style} />
      <div className="w-full min-h-screen overflow-hidden text-gray-700">
        <div className="max-w-6xl mx-auto min-h-screen pt-52 grid grid-cols-4 space-x-3">
          <LeftSideDetail />
          <RightSideFind />
        </div>
      </div>
    </>
  );
}
