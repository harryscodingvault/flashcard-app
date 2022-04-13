import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./StudyDeck.css";

import CustomCard from "../../components/CustomRecC/CustomCard/CustomCard";
import { readDeck } from "../../utils/api/index";
import CustomButton from "../../components/CustomRecC/CustomButton/CustomButton";
import BreadCrump from "../../components/BreadCrump/BreadCrump";

const StudyDeck = () => {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [allCards, setAllCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const [currentPosition, setCurrentPosition] = useState(true);
  const [allowNewCard, setAllowNewCard] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const getDeck = async () => {
      try {
        const response = await readDeck(deckId);
        setDeck(response);
        setAllCards(response.cards);
        setCurrentCard(response.cards[0]);
      } catch (err) {
        throw err;
      }
    };
    getDeck();
  }, []);

  const changeCardPositionHandler = () => {
    setCurrentPosition(!currentPosition);
    setAllowNewCard(true);
    console.log(allowNewCard);
  };

  const nextCardHandler = () => {
    let currentCardIndex = allCards.indexOf(currentCard);
    if (currentCardIndex === allCards.length - 1) {
      if (window.confirm("Restart cards?")) {
        currentCardIndex = -1;
      } else {
        history.push("/");
      }
    }
    setCurrentCard(allCards[currentCardIndex + 1]);
    console.log(allCards);
    console.log("currentCard", currentCard);
  };

  const deckDisplay = {
    render: (
      <>
        <BreadCrump urlTo="deck" deckName={deck.name} deckId={deck.id} />
        <h1 className="deck-title">{deck.name}: Study</h1>
        <CustomCard
          id={deckId}
          type="study"
          text_2={currentPosition ? currentCard?.front : currentCard?.back}
          quantity={deck?.cards?.length}
          allowNewCard={allowNewCard}
          currentCard={allCards.indexOf(currentCard) + 1}
          changeCardPositionHandler={changeCardPositionHandler}
          currentPosition={currentPosition}
          nextCardHandler={nextCardHandler}
        />
      </>
    ),
    loading: (
      <>
        <BreadCrump urlTo="deck" deckName={deck.name} deckId={deck.id} />
        <h1 className="deck-title">Loading...</h1>
      </>
    ),
    notEnoughCards: (
      <>
        <BreadCrump urlTo="deck" deckName={deck.name} deckId={deck.id} />

        <div className="add-cards-container">
          <h1 className="deck-title">{deck.name}: Study</h1>
          <h2>Not enough cards.</h2>
          <p>
            You need at least 3 cards to study. There are {deck?.cards?.length}{" "}
            cards in this deck
          </p>
          <CustomButton
            title="Add Cards"
            kind="casual"
            size="medium"
            purpose="add"
          />
        </div>
      </>
    ),
  };

  return deck?.cards?.length >= 0
    ? deck.cards.length > 2
      ? deckDisplay.render
      : deckDisplay.notEnoughCards
    : deckDisplay.loading;
};

export default StudyDeck;
