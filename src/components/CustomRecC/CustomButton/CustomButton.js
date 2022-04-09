import "./CustomButton.css";
import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdFlipCameraAndroid, MdOutlineNextPlan } from "react-icons/md";
import { ImEye, ImCancelCircle } from "react-icons/im";
import { GrEdit } from "react-icons/gr";
import { BiBookBookmark } from "react-icons/bi";
import { useHistory } from "react-router-dom";

import { deleteDeck } from "../../../utils/api/index";

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
}) => {
  const history = useHistory();

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
      window.confirm("Are you sure you want to delete this deck?");
      deleteDeck(id);
      refreshHandler();
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
  };

  return (
    <button
      className={`container ${kind} ${size}`}
      onClick={handlers[onClickHandler]}
    >
      {icons[purpose]}
      {title}
    </button>
  );
};

export default CustomButton;
