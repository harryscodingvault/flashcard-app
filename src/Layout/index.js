import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./Layout.css";
import axios from "axios";

import Header from "../components/Header/Header";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";
import CustomButton from "../components/CustomRecC/CustomButton/CustomButton";
import CustomCard from "../components/CustomRecC/CustomCard/CustomCard";
import CustomForm from "../components/CustomRecC/CustomForm/CustomForm";
import { listDecks } from "../utils/api";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const getDeck = async () => {
      try {
        const response = await listDecks();
        console.log("decks", response);
        setDecks(response);
      } catch (err) {
        throw err;
      }
    };
    getDeck();

    return () => abortController.abort();
  }, []);

  const renderDecks = decks.map((item) => {
    const { id, cards, description, name } = item;
    return (
      <CustomCard
        key={id}
        text_1={name}
        text_2={description}
        type="deck"
        quantity={cards.length}
      />
    );
  });

  return (
    <>
      <Header />
      <div className="main-app-container">
        {/* TODO: Implement the screen starting here */}
        <CustomButton
          title="Create deck"
          kind="casual"
          size="big"
          purpose="add"
        />
        {renderDecks}
        {!decks.length && <NotFound />}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
