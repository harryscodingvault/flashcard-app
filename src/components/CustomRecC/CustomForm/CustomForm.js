import React, { useState } from "react";
import "./CustomForm.css";

import CustomButton from "../CustomButton/CustomButton";
import AlertMessage from "../AlertMessage/AlertMessage";

const CustomForm = ({ type, title, input_1, input_2, submitFormHandler }) => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const initialFormState = {
    text_1: input_1 ? input_1 : "",
    text_2: input_2 ? input_2 : "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.text_1 !== "" ||
      formData.text_1 === null ||
      formData.text_1 === undefined
    ) {
      submitFormHandler(formData);
      setFormData({ ...initialFormState });
      setDisplayAlert(false);
    }
    setDisplayAlert(true);
  };

  const formType = {
    deck: (
      <>
        {displayAlert && <AlertMessage message="Forgot about  deck's title?" />}
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="text_1"
            placeholder="Deck name"
            value={formData.text_1}
            onChange={handleChange}
            maxLength={20}
          />
          <label>Description: </label>
          <textarea
            name="text_2"
            placeholder="Deck description"
            rows="10"
            value={formData.text_2}
            onChange={handleChange}
            maxLength={100}
          />
          <div className="form-button-group">
            <CustomButton
              title="Cancel"
              size="small"
              kind="danger"
              purpose="cancel"
              onClickHandler="cancelFormHandler"
              type="button"
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
      </>
    ),
    card: (
      <form onSubmit={handleSubmit}>
        <label>Front:</label>
        <textarea
          name="text_1"
          placeholder="Back side of card"
          rows="5"
          value={formData.text_1}
          onChange={handleChange}
        />
        <label>Back: </label>
        <textarea
          name="text_2"
          placeholder="Front side of card"
          rows="5"
          value={formData.text_2}
          onChange={handleChange}
        />
        <div className="form-button-group">
          <CustomButton
            title="Cancel"
            size="small"
            kind="danger"
            purpose="cancel"
            type="button"
            onClickHandler="cancelFormHandler"
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
      <h2>{title}</h2>
      {formType[type]}
    </div>
  );
};

export default CustomForm;
