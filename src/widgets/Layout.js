import React from "react";
import Head from "../components/Head";

function Layout(props) {
  return (
    <>
      <Head />
      {props.children}
    </>
  );
}

export default Layout;
