import { SearchCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import LandingHeader from "../components/landingheader";

export default function Home() {
  const [ofset, setOfset] = useState(0);
  const [style, setStyle] = useState(false);
  let last;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let currentScrollY = window.scrollY;
    setOfset(currentScrollY);
    if (currentScrollY > last) {
      setStyle(true);
    } else {
      setStyle(false);
    }
    last = currentScrollY;
  };

  return (
    <>
      <div className="w-full min-h-screen relative text-gray-800">
        <LandingHeader style={style} />
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
          className="landingbg"
        ></div>
        <div className="absolute w-full top-0 text-white">
          <div
            className={`h-screen w-full mx-auto text-center font-medium flex justify-center items-center text-5xl leading-tight`}
          >
            <p style={{ opacity: 1 - ofset / 300 }}>
              Find The Best Place and <br />
              Team to Work
            </p>
          </div>
          <div className="py-36 w-full bg-white flex flex-col items-center text-gray-800">
            <div className="flex items-center space-x-2">
              <SearchCircleIcon className="w-16 h-16 text-blue-500" />
              <p className="font-semibold text-5xl font-serif">Jobhunter</p>
            </div>
            <p className="w-1/2 px-4 text-center mt-6 text-xl text-gray-500">
              Jobhunter is the place to find your dream job. Our company vision
              is to help provide information about job vacancies in Indonesia,
              so we are committed to keep improving the services of our program
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
