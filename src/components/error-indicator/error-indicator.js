import React from "react";
import "./error-indicator.css";
import PropTypes from "prop-types";

const ErrorIndicator = ({ errorMessage }) => {
  return (
    <div className="error-indicator">
      <div>YOOPS! </div>
      <div>Something went wrong!</div>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

ErrorIndicator.defaultProps = {
  errorMessage: "",
};

ErrorIndicator.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorIndicator;
