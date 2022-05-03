import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import CustomForm from "../../components/CustomRecC/CustomForm/CustomForm";
import { getDeck as readDeck, createCard } from "../../api/api.localStorage";
import BreadCrump from "../../components/BreadCrump/BreadCrump";

const CreateCard = () => {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
  const history = useHistory();

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
    createCard(deck.id, { front: form.text_1, back: form.text_2 });

    deck.id && history.goBack();
  };

  const renderFormState = {
    render: (
      <>
        <BreadCrump urlTo="add_card" deckName={deck.name} deckId={deck.id} />
        <CustomForm
          type="card"
          title={`${deck.name}: Add Card`}
          submitFormHandler={submitFormHandler}
        />
      </>
    ),
    loading: <h1>Loading...</h1>,
  };

  return deck.name ? renderFormState.render : renderFormState.loading;
};

export default CreateCard;
