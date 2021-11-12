import { useEffect, useState } from "react";
import LeftSideDetail from "../../components/leftsidedetail";
import RightSideFind from "../../components/rightsidefind";
import Layout from "../../components/layout/layout";

export default function Jobs() {
  return (
    <Layout>
      <LeftSideDetail />
      <RightSideFind />
    </Layout>
  );
}
