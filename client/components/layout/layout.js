import { useState } from "react";
import Navbar from "../navbar";
import PostModal from "../postmodal";
import { useScroll } from "../../hooks/useScroll";
import JobDetail from "../jobdetail";

export default function Layout({ children }) {
  const { style } = useScroll();
  const [modalCreate, setModalCreate] = useState(false);
  const [modalDetail, setModalDetail] = useState(true);
  return (
    <>
      <Navbar style={style} setModalCreate={setModalCreate} />
      <div className="w-full min-h-screen overflow-hidden text-gray-800">
        {modalCreate && <PostModal close={() => setModalCreate(false)} />}
        {modalDetail && <JobDetail close={() => setModalDetail(false)} />}
        <div className="max-w-6xl mx-auto min-h-screen pt-52 grid grid-cols-4 space-x-3">
          {children}
        </div>
      </div>
    </>
  );
}
