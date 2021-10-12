import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="w-full bg-black min-h-screen">
      <div className="absolute top-0 bg-gradient-to-b h-screen from-black/60 to-black w-full z-10"></div>
      <img
        className="w-full object-cover overflow-hidden"
        src="https://i.ibb.co/3RZX1d2/bgcok-clear.png"
        alt="bg"
      />

      <div className="w-full absolute h-screen top-0 z-20">
        <Navbar />
        <div className="max-w-5xl mx-auto text-white flex justify-center py-44 place-items-center">
          <div className="flex flex-col place-items-center">
            <div className="flex justify-center mb-3">
              <img src="playicon.svg" alt="playicon" />
            </div>
            <h1 className="font-serif font-light text-6xl mb-3">
              mabar<span className="font-bold text-lghtgreen">cok</span>
            </h1>
            <p className="text-md mb-6">A Place to Find Your Teammates</p>
            <div className="py-3 relative bottom-0 hover:bottom-1 duration-200 cursor-pointer text-black rounded-lg text-sm font-medium px-6 bg-gradient-to-b from-green to-lghtgreen">
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
