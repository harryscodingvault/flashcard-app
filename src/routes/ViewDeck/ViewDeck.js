import React, { useState, useEffect } from "react";
import "./ViewDeck.css";
import { useParams } from "react-router-dom";

import CustomCard from "../../components/CustomRecC/CustomCard/CustomCard";
import { readDeck } from "../../utils/api/index";

const ViewDeck = () => {
  const [deck, setDeck] = useState({});
  const [refresh, setRefresh] = useState(false);
  const { deckId } = useParams();

  useEffect(() => {
    let cancel = false;
    const getDeck = async () => {
      try {
        const response = await readDeck(deckId);
        if (cancel) return;
        setDeck(response);
        setRefresh(false);
      } catch (err) {
        throw err;
      }
    };
    getDeck();
    return () => {
      cancel = true;
    };
  }, [refresh]);

  const refreshHandler = () => {
    setRefresh(true);
  };

  const getAllCards = deck?.cards?.map((item) => {
    return (
      <CustomCard
        key={item.id}
        id={item.id}
        text_1={item.front}
        text_2={item.back}
        type="edit"
        refreshHandler={refreshHandler}
      />
    );
  });

  return (
    <div>
      <h2>Deck: </h2>
      <CustomCard
        id={deck.id}
        text_1={deck.name}
        text_2={deck.description}
        type="deck"
        quantity={deck?.cards?.length}
        editDeck={true}
      />
      <section className="study-cards-section">
        <h2>Cards: </h2>
        <div className="map-study-cards"> {getAllCards}</div>
      </section>
    </div>
  );
};

export default ViewDeck;
