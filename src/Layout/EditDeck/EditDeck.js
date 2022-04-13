import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./EditDeck.css";

import CustomForm from "../../components/CustomRecC/CustomForm/CustomForm";
import BreadCrump from "../../components/BreadCrump/BreadCrump";

import { readDeck, updateDeck } from "../../utils/api/index";

const EditDeck = () => {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    const getDeck = async () => {
      try {
        const response = await readDeck(deckId);
        setDeck(response);
      } catch (err) {
        throw err;
      }
    };
    getDeck();
  }, [deckId]);

  const submitFormHandler = (form) => {
    updateDeck({ id: deck.id, name: form.text_1, description: form.text_2 });
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
