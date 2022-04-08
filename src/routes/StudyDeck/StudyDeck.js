import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CustomCard from "../../components/CustomRecC/CustomCard/CustomCard";
import { readDeck } from "../../utils/api/index";

const StudyDeck = () => {
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const getDeck = async () => {
      try {
        const response = await readDeck(deckId);
        console.log("dec", response);
        setDeck(response);
      } catch (err) {
        throw err;
      }
    };
    getDeck();
  }, []);

  return (
    <>
      <h1 className="deck-title">Study: {deck.name}</h1>
      <CustomCard
        id={deckId}
        type="study"
        text_2={deck.description}
        quantity={deck.cards.length}
      />
    </>
  );
};

export default StudyDeck;
