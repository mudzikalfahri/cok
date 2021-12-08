import { SearchCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import LandingHeader from "../components/landingheader";
import { useScroll } from "../hooks/useScroll";

export default function Home() {
  const { ofset, style } = useScroll();

  return (
    <>
      <div className="w-full min-h-screen relative text-gray-700">
        <LandingHeader style={style} />
        <div className="landingbg"></div>
        <div className="absolute w-full top-0 text-white">
          <div
            className={`h-screen w-full mx-auto text-center font-medium flex justify-center items-center text-5xl leading-tight`}
          >
            <p style={{ opacity: 1 - ofset / 300 }}>
              Find The Best Place and <br />
              Team to Work
            </p>
          </div>
          <div className="pb-36 pt-32 max-w-7xl mx-auto bg-white flex flex-col items-center text-gray-700">
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
          <div className="py-36 mx-auto w-full bg-white text-gray-700">
            <div className="max-w-7xl flex mx-auto">
              <div className="w-2/3 rounded-tr-lg rounded-br-lg overflow-hidden mr-10 mx-auto">
                <img className="w-full" src="/registernow.png" alt="" />
              </div>
              <div className="w-1/2 relative">
                <div className="absolute bg-white -left-20 py-14 px-16 rounded-xl top-8">
                  <h2 className="text-4xl leading-normal">
                    Register as candidate and start building your career by now
                  </h2>
                  <p className="text-xl mt-4 text-gray-500">
                    Get free 1-year subscription for new member
                  </p>
                  <button className="py-3 px-8 mt-6 bg-blue-500 text-white rounded-md">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-36 mx-auto w-full bg-white text-gray-700">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-center text-4xl font-semibold">
                Our Partners
              </h3>
              <div className="flex justify-center flex-wrap  mt-14">
                <div className="w-1/4 py-8 flex items-center row justify-center">
                  <img src="/image1.png" alt="" />
                </div>
                <div className="w-1/4 py-8 flex items-center justify-center">
                  <img src="/image2.png" alt="" />
                </div>
                <div className="w-1/4 py-8 flex items-center justify-center">
                  <img src="/image3.png" alt="" />
                </div>
                <div className="w-1/4 py-8 flex items-center justify-center">
                  <img src="/image4.png" alt="" />
                </div>
                <div className="w-1/4 py-8 flex items-center justify-center">
                  <img src="/image5.png" alt="" />
                </div>
                <div className="w-1/4 py-8 flex items-center col-span-2 justify-center">
                  <img src="/image6.png" alt="" />
                </div>
                <div className="w-1/4 py-8 flex items-center justify-center">
                  <img src="/image7.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray-100">
            <div className="text-gray-700 max-w-7xl mx-auto bg-gray-100 grid grid-cols-6">
              <div className="logo"></div>
              <div className="follow"></div>
              <div className="about"></div>
              <div className="sub"></div>
              <div className="others"></div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
