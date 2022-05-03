import React from "react";
import "./CreateDeck.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import CustomForm from "../../components/CustomRecC/CustomForm/CustomForm";
import { createDeck } from "../../api/api.localStorage";
import BreadCrump from "../../components/BreadCrump/BreadCrump";

const CreateDeck = () => {
  const history = useHistory();

  const submitFormHandler = (form) => {
    const deckInfo = { name: form.text_1, description: form.text_2 };
    createDeck(deckInfo);
    history.push("/");
  };

  return (
    <div>
      <BreadCrump urlTo="create_deck" />
      <CustomForm
        type="deck"
        title="Create Deck"
        submitFormHandler={submitFormHandler}
      />
    </div>
  );
};

export default CreateDeck;
