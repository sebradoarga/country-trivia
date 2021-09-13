import React from "react";
import errorImage from "../images/error-image.png";
import ErrorMessageStyles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={ErrorMessageStyles.errorContainer}>
      <h2 className={ErrorMessageStyles.errorText}>
        Oops, something went wrong.
      </h2>
      <img
        src={errorImage}
        alt="Cartoon of confused man surrounded by question marks"
        className={ErrorMessageStyles.img}
      />
    </div>
  );
};

export default ErrorMessage;
