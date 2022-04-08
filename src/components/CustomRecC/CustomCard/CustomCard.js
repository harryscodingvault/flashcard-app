import React from "react";
import "./CustomCard.css";

import CustomButton from "../CustomButton/CustomButton";

const CustomCard = ({
  title,
  text,
  type,
  quantity,
  currentCard,
  question,
  answer,
}) => {
  const selectType = {
    deck: (
      <>
        <div className="card-text-container">
          <div className="card-top-text-group">
            <h2>{title}</h2>
            <p>
              {quantity} {quantity > 1 ? "cards" : "card"}
            </p>
          </div>
          <p>{text}</p>
        </div>
        <div className="card-button-container">
          <div className="card-button-group-1">
            <CustomButton
              title="View"
              kind="warning"
              size="small"
              purpose="view"
            />
            <CustomButton
              title="Study"
              kind="casual"
              size="small"
              purpose="study"
            />
          </div>
          <div className="card-button-group-2">
            <CustomButton
              title="Delete"
              kind="danger"
              size="small"
              purpose="delete"
            />
          </div>
        </div>
      </>
    ),
    study: (
      <>
        <div className="card-text-container">
          <div className="card-top-text-group">
            <h2>
              {quantity > 1
                ? `Card ${currentCard}  of ${quantity}`
                : "Only card"}
            </h2>
          </div>
          <p>{text}</p>
        </div>
        <div className="card-button-container">
          <div className="card-button-group-1">
            <CustomButton
              title="Flip"
              kind="casual"
              size="small"
              purpose="flip"
            />
            <CustomButton
              title="next"
              kind="success"
              size="small"
              purpose="next"
            />
          </div>
        </div>
      </>
    ),
    edit: (
      <>
        {" "}
        <div className="card-text-container">
          <div className="card-top-text-group">
            <p>{question}</p>
            <p>{answer}</p>
          </div>
        </div>
        <div className="card-button-container">
          <div className="card-button-group-1">
            <CustomButton
              title="Edit"
              kind="warning"
              size="small"
              purpose="edit"
            />
          </div>
          <div className="card-button-group-2">
            <CustomButton
              title="Delete"
              kind="danger"
              size="small"
              purpose="delete"
            />
          </div>
        </div>
      </>
    ),
  };

  return <div className="card-container">{selectType[type]}</div>;
};

export default CustomCard;
