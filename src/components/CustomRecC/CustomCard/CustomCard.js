import React from "react";
import "./CustomCard.css";

import CustomButton from "../CustomButton/CustomButton";

const CustomCard = ({
  id,
  text_1,
  text_2,
  type,
  quantity,
  currentCard,
  refreshHandler,
  allowNewCard,
  changeCardPositionHandler,
  currentPosition,
  nextCardHandler,
  editDeck,
}) => {
  const selectType = {
    deck: (
      <>
        <div className="card-text-container">
          <div className="card-top-text-group">
            <h2>
              {text_1?.length > 20 ? `${text_1?.substring(0, 20)}...` : text_1}
            </h2>
            <p>
              {quantity}{" "}
              {quantity > 1 ? "cards" : quantity === 0 ? "cards" : "card"}
            </p>
          </div>
          <p>
            {text_2?.length > 100 ? `${text_2?.substring(0, 100)}...` : text_2}
          </p>
        </div>
        <div className="card-button-container">
          <div className="card-button-group-1">
            {editDeck ? (
              <CustomButton
                id={id}
                title="Edit"
                kind="warning"
                size="small"
                purpose="edit"
                onClickHandler="editDeckHandler"
              />
            ) : (
              <CustomButton
                id={id}
                title="View"
                kind="warning"
                size="small"
                purpose="view"
                onClickHandler="viewDeckHandler"
              />
            )}
            <CustomButton
              id={id}
              title="Study"
              kind="casual"
              size="small"
              purpose="study"
              onClickHandler="studyDeckHandler"
            />
          </div>
          <div className="card-button-group-2">
            {editDeck && (
              <CustomButton
                id={id}
                title="Add Cards"
                kind="casual"
                size="small"
                purpose="add"
                onClickHandler="addCardsHandler"
              />
            )}
            <CustomButton
              id={id}
              title="Delete"
              kind="danger"
              size="small"
              purpose="delete"
              onClickHandler="deleteDeckHandler"
              refreshHandler={refreshHandler}
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
            {currentPosition ? <h3>Front</h3> : <h3>Back</h3>}
          </div>
          <p>{text_2}</p>
        </div>
        <div className="card-button-container">
          <div className="card-button-group-1">
            <CustomButton
              title="Flip"
              kind="casual"
              size="small"
              purpose="flip"
              onClickHandler="flipCardHandler"
              changeCardPositionHandler={changeCardPositionHandler}
            />
            {allowNewCard && (
              <CustomButton
                title="next"
                kind="success"
                size="small"
                purpose="next"
                onClickHandler="nextCardHandler"
                nextCardHandler={nextCardHandler}
              />
            )}
          </div>
        </div>
      </>
    ),
    edit: (
      <>
        <div className="card-text-container">
          <div className="card-top-text-group">
            <p>{text_1?.substring(0, 50)}...</p>
            <p>{text_2?.substring(0, 50)}...</p>
          </div>
        </div>
        <div className="card-button-container">
          <div className="card-button-group-1">
            <CustomButton
              id={id}
              title="Edit"
              kind="warning"
              size="small"
              purpose="edit"
              onClickHandler="editCardHandler"
            />
          </div>
          <div className="card-button-group-2">
            <CustomButton
              id={id}
              title="Delete"
              kind="danger"
              size="small"
              purpose="delete"
              onClickHandler="deleteCardHandler"
              refreshHandler={refreshHandler}
            />
          </div>
        </div>
      </>
    ),
  };

  return <div className="card-container">{selectType[type]}</div>;
};

export default CustomCard;
