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
    if (currentScrollY > last) {
      setStyle(true);
    } else {
      setStyle(false);
    }
    last = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  const scrollEvent = () => setOfset(window.scrollY);

  return (
    <>
      <div className="w-full min-h-screen relative text-gray-700">
        <LandingHeader style={style} />
        <div
          style={{
            transform: `translateY(${ofset}px)`,
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
          <div className="h-screen w-full bg-white">COMPONENT</div>
        </div>
      </div>
    </>
  );
}
