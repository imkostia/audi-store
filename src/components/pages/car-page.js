import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import CarDetails from "../car-details";

const CarPage = () => {
  const { id } = useParams();

  const car = useSelector(({ carsStore }) =>
    carsStore.cars.find((car) => car.id === id)
  );

  return (
    <div>
      <h2>Car {`${car.brand} ${car.model}`}</h2>
      <CarDetails car={car} />
    </div>
  );
};

export default CarPage;
