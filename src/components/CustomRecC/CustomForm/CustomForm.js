import React from "react";
import "./CustomForm.css";

import CustomButton from "../CustomButton/CustomButton";

const CustomForm = ({ type, title, text_1, text_2 }) => {
  const formType = {
    deck: (
      <form>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Deck name" />
        <label>Description: </label>
        <textarea name="name" placeholder="Deck description" rows="10" />
        <div className="form-button-group">
          <CustomButton
            title="Cancel"
            size="small"
            kind="danger"
            purpose="cancel"
          />
          <CustomButton
            title="Submit"
            size="small"
            kind="success"
            type="submit"
            purpose="add"
          />
        </div>
      </form>
    ),
    card: (
      <form>
        <label>Front:</label>
        <textarea name="name" placeholder="Back side of card" rows="5" />
        <label>Back: </label>
        <textarea name="name" placeholder="Front side of card" rows="5" />
        <div className="form-button-group">
          <CustomButton
            title="Cancel"
            size="small"
            kind="danger"
            purpose="cancel"
          />
          <CustomButton
            title="Save"
            size="small"
            kind="success"
            type="submit"
            purpose="add"
          />
        </div>
      </form>
    ),
  };

  return (
    <div className="custom-form-container">
      <h1>{title}</h1>
      {formType[type]}
    </div>
  );
};

export default CustomForm;
