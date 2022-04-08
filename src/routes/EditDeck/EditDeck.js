import React from "react";
import { useParams } from "react-router-dom";
import "./EditDeck.css";

import CustomButton from "../../components/CustomRecC/CustomButton/CustomButton";
import NotFound from "../../components/NotFound/NotFound";
import CustomCard from "../../components/CustomRecC/CustomCard/CustomCard";
import { listDecks } from "../../utils/api/index";

const EditDeck = () => {
  const { deckId } = useParams();
  console.log("deckId", deckId);

  return <CustomCard />;
};

export default EditDeck;
