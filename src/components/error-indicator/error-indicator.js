import React from "react";
import "./error-indicator.css";

const ErrorIndicator = ({ errorMessage }) => {
  return (
    <div className="error-indicator">
      <div>YOOPS! </div>
      <div>Something went wrong!</div>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default ErrorIndicator;
