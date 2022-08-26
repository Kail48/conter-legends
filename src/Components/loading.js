import React, { Component } from "react";
import "../Css/loader.css";
import ReactLoading from "react-loading";
const Loader = () => {
  return (
    <div className="loader-wrapper">
      <ReactLoading
        type={"spinningBubbles"}
        color={"white"}
        height={"20%"}
        width={"20%"}
      />
    </div>
  );
};
export default Loader;
