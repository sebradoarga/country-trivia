import React from "react";
import LoadingMessageStyles from "./LoadingMessage.module.css";

const LoadingMessage = () => {
  return (
    <h2 className={LoadingMessageStyles.loadingMessage}>
      Fetching countries...
    </h2>
  );
};

export default LoadingMessage;
