import React from "react";
import "./BreadCrump.css";
import { Link } from "react-router-dom";

const BreadCrump = ({ deckId, deckName, cardId, urlTo = "" }) => {
  const pathnames = {
    deck: [[deckName, "Study"], [`/decks/${deckId}`]],
    create_deck: [["Create Deck"], [`/decks/new`]],
    view_deck: [[deckName], [`/decks/${deckId}`]],
    edit_deck: [[deckName, "Edit Deck"], [`/decks/${deckId}`]],
    add_card: [[deckName, "Add Card"], [`/decks/${deckId}`]],
    edit_card: [[deckName, `Edit Card ${cardId}`], [`/decks/${deckId}`]],
  };

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
            <h3>
              {title?.length > 10 ? `${title?.substring(0, 10)}...` : title}
            </h3>
          </div>
        ) : (
          <div key={index}>
            <Link to={urlLink}>
              <h3>
                {title?.length > 10 ? `${title?.substring(0, 10)}...` : title}
              </h3>
            </Link>
            <h3> / </h3>
          </div>
        );
      })}
    </section>
  );
};

export default BreadCrump;
