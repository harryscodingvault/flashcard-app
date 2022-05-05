import React, { useState, useEffect } from "react";
import "./Home.css";

import CustomButton from "../../components/CustomRecC/CustomButton/CustomButton";
import CustomCard from "../../components/CustomRecC/CustomCard/CustomCard";
import { getDecks } from "../../api/api.localStorage";

const Home = () => {
  const [decks, setDecks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const getDeck = async () => {
      try {
        let response = await getDecks();
        response = response ? response.map((item) => item) : [];

        setDecks(response);
        setRefresh(false);
      } catch (err) {
        throw err;
      }
    };
    getDeck();

    return () => abortController.abort();
  }, [refresh]);

  const refreshHandler = () => {
    setRefresh(true);
  };

  const renderDecks = decks.map((item) => {
    const { id, cards, description, name } = item;

    return (
      <div className="deck-unit" key={id}>
        <CustomCard
          id={id}
          text_1={name}
          text_2={description}
          type="deck"
          quantity={cards.length}
          refreshHandler={refreshHandler}
        />
      </div>
    );
  });
  return (
    <>
      <CustomButton
        title="Create deck"
        kind="casual"
        size="big"
        purpose="add"
        onClickHandler="createDeckHandler"
      />
      <div className="decks-group">
        {!decks.length ? (
          <h1>Make some decks to start practicing</h1>
        ) : (
          renderDecks
        )}
      </div>
    </>
  );
};

export default Home;
