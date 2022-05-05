import React, { useState, useEffect } from "react";
import "./ViewDeck.css";
import { useParams } from "react-router-dom";

import CustomCard from "../../components/CustomRecC/CustomCard/CustomCard";
import { getDeck as retrieveDeck } from "../../api/api.localStorage";
import BreadCrump from "../../components/BreadCrump/BreadCrump";

const ViewDeck = () => {
  const [deck, setDeck] = useState({});
  const [refresh, setRefresh] = useState(false);
  const { deckId } = useParams();

  useEffect(() => {
    let cancel = false;
    const getDeck = async () => {
      try {
        const response = await retrieveDeck(deckId);

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
  }, [refresh, deckId]);

  const refreshHandler = () => {
    setRefresh(true);
  };

  const getAllCards = deck?.cards?.map((item) => {
    return (
      <div className="card-unit" key={item.id}>
        <CustomCard
          id={item.id}
          text_1={item.front}
          text_2={item.back}
          type="edit"
          refreshHandler={refreshHandler}
        />
      </div>
    );
  });

  return (
    <div className="deck-view">
      <BreadCrump urlTo="view_deck" deckName={deck.name} deckId={deck.id} />
      <h2>Deck: </h2>
      <CustomCard
        id={deck.id}
        text_1={deck.name}
        text_2={deck.description}
        type="deck"
        quantity={deck?.cards?.length}
        editDeck={true}
      />

      {deck?.cards?.length ? (
        <h2>Cards: </h2>
      ) : (
        <h2>Add some cards to the deck</h2>
      )}
      <section className="study-cards-section">
        <div className="map-study-cards"> {getAllCards}</div>
      </section>
    </div>
  );
};

export default ViewDeck;
