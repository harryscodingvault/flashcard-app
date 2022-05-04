import React from "react";
import "./AlertMessage.css";

const AlertMessage = ({ message, errorType }) => {
  return (
    <div className="alert-message">
      <h3>{message}</h3>
    </div>
  );
};

export default AlertMessage;
