import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import CustomForm from "../../components/CustomRecC/CustomForm/CustomForm";
import { readCard, updateCard, readDeck } from "../../utils/api/index";
import BreadCrump from "../../components/BreadCrump/BreadCrump";

const EditCard = () => {
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const { deckId, cardId } = useParams();
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
  }, []);

  useEffect(() => {
    const getCard = async () => {
      try {
        const response = await readCard(cardId);
        setCard(response);
      } catch (err) {
        throw err;
      }
    };
    getCard();
  }, []);

  const submitFormHandler = (form) => {
    updateCard({
      id: card.id,
      deckId: card.deckId,
      front: form.text_1,
      back: form.text_2,
    });
    history.goBack();
  };

  const renderFormState = {
    render: (
      <>
        <BreadCrump
          urlTo="edit_card"
          deckName={deck.name}
          deckId={deck.id}
          cardId={card.id}
        />

        <CustomForm
          title="Edit Card:"
          type="card"
          input_1={card.front}
          input_2={card.back}
          submitFormHandler={submitFormHandler}
        />
      </>
    ),
    loading: <h1>Loading...</h1>,
  };

  return card.id ? renderFormState.render : renderFormState.loading;
};

export default EditCard;
