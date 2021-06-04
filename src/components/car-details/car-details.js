import React from "react";
import PropTypes from "prop-types";

import "./car-details.css";

const CarDetails = ({ car }) => {
  return (
    <React.Fragment>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Brand</td>
            <td>{car.brand}</td>
          </tr>
          <tr>
            <td>Model</td>
            <td>{car.model}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{car.price} $</td>
          </tr>
          <tr>
            <td>Power</td>
            <td>{car.power}</td>
          </tr>
          <tr>
            <td>Acceleration</td>
            <td>{car.acceleration} s.</td>
          </tr>
          <tr>
            <td>Max speed</td>
            <td>{car.maxSpeed}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{car.description}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

CarDetails.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarDetails;
