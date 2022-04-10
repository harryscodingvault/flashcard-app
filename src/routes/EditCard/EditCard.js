import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import CustomForm from "../../components/CustomRecC/CustomForm/CustomForm";
import { readCard, updateCard } from "../../utils/api/index";

const EditCard = () => {
  const [card, setCard] = useState({});
  const { cardId } = useParams();
  const history = useHistory();

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
      <CustomForm
        title="Edit Card:"
        type="card"
        input_1={card.front}
        input_2={card.back}
        submitFormHandler={submitFormHandler}
      />
    ),
    loading: <h1>Loading...</h1>,
  };

  return card.id ? renderFormState.render : renderFormState.loading;
};

export default EditCard;
