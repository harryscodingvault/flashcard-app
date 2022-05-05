import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <div className="text-container">
          <h1>FlashCard_Simple</h1>
        </div>
      </Link>
    </header>
  );
}

export default Header;
