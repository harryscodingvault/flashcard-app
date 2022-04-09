import React, { useState, useEffect } from "react";

import CustomButton from "../../components/CustomRecC/CustomButton/CustomButton";
import NotFound from "../../components/NotFound/NotFound";
import CustomCard from "../../components/CustomRecC/CustomCard/CustomCard";
import { listDecks } from "../../utils/api/index";

const Home = () => {
  const [decks, setDecks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const getDeck = async () => {
      try {
        const response = await listDecks();
        console.log("decks", response);
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
    console.log("refresh");
  };

  const renderDecks = decks.map((item) => {
    const { id, cards, description, name } = item;
    return (
      <CustomCard
        key={id}
        id={id}
        text_1={name}
        text_2={description}
        type="deck"
        quantity={cards.length}
        refreshHandler={refreshHandler}
      />
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
      {renderDecks}
      {!decks.length && <NotFound />}
    </>
  );
};

export default Home;
