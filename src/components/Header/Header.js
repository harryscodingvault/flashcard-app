import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <div className="text-container">
          <h1>Flashcard-o-matic</h1>
          <p>Discover The Flashcard Difference.</p>
        </div>
      </Link>
    </header>
  );
}

export default Header;
