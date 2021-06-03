import React, { useEffect } from "react";
import CarListItem from "../car-list-item";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchCars } from "../../store/thunks/cars";
import { addCarToCart } from "../../store/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import "./car-list.css";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector(({ carsStore }) => carsStore);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div className="car-list">
      {cars && cars.length ? (
        cars.map((car) => {
          return (
            <CarListItem
              key={car.id}
              car={car}
              onAddToCart={() => dispatch(addCarToCart(car.id))}
            />
          );
        })
      ) : (
        <h1>There are no cars yet</h1>
      )}
    </div>
  );
};

export default CarList;
