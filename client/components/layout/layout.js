import { useState } from "react";
import Navbar from "../navbar";
import PostModal from "../postmodal";
import { useScroll } from "../../hooks/useScroll";
import JobDetail from "../jobdetail";
import { useTheme } from "../../utils/context";
import Head from "next/head";

export default function Layout({ children }) {
  const { style } = useScroll();
  const [modalCreate, setModalCreate] = useState(false);
  const { openModalDetail } = useTheme().state;
  return (
    <>
      <Head>
        <title>Jobhunter - Find a Job</title>
      </Head>
      <Navbar style={style} setModalCreate={setModalCreate} />
      <div className="w-full min-h-screen overflow-hidden text-gray-800">
        {modalCreate && <PostModal close={() => setModalCreate(false)} />}
        {openModalDetail && <JobDetail />}
        <div className="max-w-6xl mx-auto min-h-screen pt-52 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-3">
          {children}
        </div>
      </div>
    </>
  );
}
