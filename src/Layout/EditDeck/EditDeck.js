import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./EditDeck.css";

import CustomForm from "../../components/CustomRecC/CustomForm/CustomForm";
import BreadCrump from "../../components/BreadCrump/BreadCrump";

import { editDeck, getDeck as readDeck } from "../../api/api.localStorage";

const EditDeck = () => {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    const getDeck = async () => {
      try {
        const response = await readDeck(deckId);
        console.log("thidDe", response);
        setDeck(response);
      } catch (err) {
        throw err;
      }
    };
    getDeck();
  }, [deckId]);

  const submitFormHandler = (form) => {
    const deckInfo = {
      id: deckId,
      name: form.text_1,
      description: form.text_2,
    };
    editDeck(deckInfo);
    history.goBack();
  };
  const renderDeckState = {
    render: (
      <>
        <BreadCrump urlTo="edit_deck" deckName={deck.name} deckId={deck.id} />
        <CustomForm
          type="deck"
          title="Edit Deck:"
          input_1={deck.name}
          input_2={deck.description}
          submitFormHandler={submitFormHandler}
        />
      </>
    ),
    loading: <h1>Loading...</h1>,
  };

  return deck.name ? renderDeckState.render : renderDeckState.loading;
};

export default EditDeck;
