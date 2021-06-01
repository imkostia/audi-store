import React from "react";
import "./car-details.css";

class CarDetails extends React.Component {
  render() {
    const { brand, model, year } = this.props.car;

    return (
      <React.Fragment>
        <span>Brand: {brand}</span>
        <span>Model: {model}</span>
        <span>Year: {year}</span>
      </React.Fragment>
    );
  }
}

export default CarDetails;
