import React from "react";
import "./error-indicator.css";

export default class ErrorIndicator extends React.Component {
  render() {
    return (
      <div>
        <div>YOOPS! </div>
        <div>Something went wrong!</div>
      </div>
    );
  }
}
