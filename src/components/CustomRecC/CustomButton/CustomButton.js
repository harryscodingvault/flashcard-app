import "./CustomButton.css";
import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdFlipCameraAndroid, MdOutlineNextPlan } from "react-icons/md";
import { ImEye, ImCancelCircle } from "react-icons/im";
import { GrEdit } from "react-icons/gr";
import { BiBookBookmark } from "react-icons/bi";
import { useHistory, useParams } from "react-router-dom";

import { deleteDeck, deleteCard } from "../../../api/api.localStorage";

const CustomButton = ({
  id,
  title,
  kind,
  size,
  purpose,
  onClickHandler,
  refreshHandler,
  changeCardPositionHandler,
  nextCardHandler,
  type,
}) => {
  const history = useHistory();
  const { deckId } = useParams();

  const icons = {
    add: <FaRegPlusSquare />,
    delete: <RiDeleteBin2Line />,
    view: <ImEye />,
    study: <BiBookBookmark />,
    flip: <MdFlipCameraAndroid />,
    edit: <GrEdit />,
    next: <MdOutlineNextPlan />,
    cancel: <ImCancelCircle />,
  };

  const handlers = {
    deleteDeckHandler: () => {
      if (window.confirm("Are you sure you want to delete this deck?")) {
        deleteDeck(id);
        refreshHandler ? refreshHandler() : history.push(`/`);
      }
    },
    studyDeckHandler: () => {
      history.push(`/decks/${id}/study`);
    },
    flipCardHandler: () => {
      changeCardPositionHandler();
    },
    nextCardHandler: () => {
      nextCardHandler();
    },
    createDeckHandler: () => {
      history.push(`/decks/new`);
    },
    cancelFormHandler: () => {
      history.goBack();
    },
    viewDeckHandler: () => {
      history.push(`/decks/${id}`);
    },
    editDeckHandler: () => {
      history.push(`/decks/${id}/edit`);
    },
    addCardsHandler: () => {
      history.push(`/decks/${id}/cards/new`);
    },
    deleteCardHandler: () => {
      if (
        window.confirm(
          "Delete this card?\n\nYou will not be able to recover it"
        )
      ) {
        deleteCard(id);
        refreshHandler();
      }
    },
    editCardHandler: () => {
      history.push(`/decks/${deckId}/cards/${id}/edit`);
    },
  };
  const renderButton = {
    form: (
      <button
        className={`container ${kind} ${size}`}
        onClick={handlers[onClickHandler]}
        type={type}
      >
        {icons[purpose]}
        {title}
      </button>
    ),
    ordinary: (
      <button
        className={`container ${kind} ${size}`}
        onClick={handlers[onClickHandler]}
      >
        {icons[purpose]}
        {title}
      </button>
    ),
  };

  return type ? renderButton.form : renderButton.ordinary;
};

export default CustomButton;
