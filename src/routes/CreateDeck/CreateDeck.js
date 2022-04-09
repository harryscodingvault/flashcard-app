import React from "react";
import "./CreateDeck.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import CustomForm from "../../components/CustomRecC/CustomForm/CustomForm";
import { createDeck } from "../../utils/api/index";

const CreateDeck = () => {
  const history = useHistory();

  const submitFormHandler = (form) => {
    createDeck({ name: form.text_1, description: form.text_2 });
    history.push("/");
  };

  return (
    <div>
      <CustomForm
        type="deck"
        title="Create Deck"
        submitFormHandler={submitFormHandler}
      />
    </div>
  );
};

export default CreateDeck;
