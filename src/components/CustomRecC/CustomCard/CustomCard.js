import React from "react";
import "./CustomCard.css";

import CustomButton from "../CustomButton/CustomButton";

const CustomCard = ({ title, text, type, quantity }) => {
  const selectType = {};

  return (
    <div className="card-container">
      <div className="card-text-container">
        <div className="card-top-text-group">
          <h2>{title}</h2>
          <p>{quantity} cards</p>
        </div>
        <p>{text}</p>
      </div>
      <div className="card-button-container">
        <div className="card-button-group-1">
          <CustomButton
            title="View"
            type="warning"
            size="small"
            purpose="view"
          />
          <CustomButton
            title="Study"
            type="casual"
            size="small"
            purpose="study"
          />
        </div>
        <div className="card-button-group-2">
          <CustomButton
            title="Delete"
            type="danger"
            size="small"
            purpose="delete"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
