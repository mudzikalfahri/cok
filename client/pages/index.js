import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (e) => {
    console.log(window.scrollY);
    if (window.scrollY) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">
      <div
        className={`absolute top-0 bg-gradient-to-b h-screen from-black/60 to-black w-full z-10`}
      ></div>
      {/* <img
        className="w-full h-screen object-cover overflow-hidden"
        src="https://i.ibb.co/3RZX1d2/bgcok-clear.png"
        alt="bg"
      /> */}
      <div className="sliding-background mx-auto overflow-hidden"></div>
      <div className="w-full absolute min-h-screen top-0 z-20">
        <Navbar scrolled={scrolled} />
        <div className="max-w-5xl mx-auto text-white flex justify-center h-screen place-items-center">
          <div className="flex flex-col place-items-center">
            <div className="flex justify-center mb-3">
              <img src="playicon.svg" alt="playicon" />
            </div>
            <h1 className="font-serif font-light text-6xl mb-3">
              mabar<span className="font-bold text-lghtgreen">cok</span>
            </h1>
            <p className="text-md mb-6">A Place to Find Your Teammates</p>
            <div className="py-3 relative bottom-0 hover:bottom-1 duration-200 cursor-pointer text-black rounded-lg text-sm font-medium px-6 bg-gradient-to-r from-green to-lghtgreen">
              Register Now
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="max-w-5xl mx-auto h-screen bg-black text-white text-6xl"></div>
        </div>
      </div>
    </div>
  );
}
