import React from "react";

export async function getServerSideProps(context) {
  console.log(context);

  return {
    props: {},
  };
}

function Query() {
  return <div></div>;
}

export default Query;
