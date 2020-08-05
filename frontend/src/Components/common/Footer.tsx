import React from "react";
import AppBar from "@material-ui/core/AppBar";

const footer = {
  top: "auto",
  bottom: 0
};

const Footer = () => {
  return <AppBar position="fixed" color="primary" style={footer} />;
};

export default Footer;
