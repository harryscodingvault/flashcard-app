import React from "react";
import "./BreadCrump.css";
import { Link } from "react-router-dom";

const BreadCrump = ({ deckId, deckName, cardId, urlTo = "" }) => {
  const pathnames = {
    deck: [[deckName, "Study"], [`/decks/${deckId}`]],
    create_deck: [["Create Deck"], [`/decks/new`]],
  };
  console.log("pathnames", pathnames[urlTo]);

  return (
    <section className={`breadcrump-container`}>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <h3> / </h3>
      {pathnames[urlTo][0].map((title, index) => {
        const urlLink = pathnames[urlTo][1][index];
        const isLast = index === pathnames[urlTo][0].length - 1;
        return isLast ? (
          <div key={index}>
            <h3>{title}</h3>
            <h3> / </h3>
          </div>
        ) : (
          <div key={index}>
            <Link to={urlLink}>
              <h3>{title}</h3>
            </Link>
            <h3> / </h3>
          </div>
        );
      })}
    </section>
  );
};

export default BreadCrump;
