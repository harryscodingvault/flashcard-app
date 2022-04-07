import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <h4>Copyright © {currentYear} Harrys.one</h4>
    </footer>
  );
};

export default Footer;
