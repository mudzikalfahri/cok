import { useEffect, useState } from "react";
import Navbar from "../navbar";
import PostModal from "../postmodal";

export default function Layout({ children }) {
  const [style, setStyle] = useState(false);
  let last;
  const [modalOpen, setModalOpen] = useState(false);

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

  return (
    <>
      <Navbar style={style} setModalOpen={setModalOpen} />
      <div className="w-full min-h-screen overflow-hidden text-gray-800">
        {modalOpen && <PostModal close={() => setModalOpen(false)} />}
        <div className="max-w-6xl mx-auto min-h-screen pt-52 grid grid-cols-4 space-x-3">
          {children}
        </div>
      </div>
    </>
  );
}
