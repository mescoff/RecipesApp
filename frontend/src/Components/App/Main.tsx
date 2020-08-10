import React from "react";
import HeaderBar from "../common/Header";
import Footer from "../common/Footer";

 const Main: React.FC = (props) => (
  <div className="main-container" style={{ width: "100%" }}>
    <HeaderBar />
    {props.children}
    <Footer/>
  </div>
);

export default Main;
