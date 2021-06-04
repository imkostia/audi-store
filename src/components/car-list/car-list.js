import React, { useEffect } from "react";
import CarListItem from "../car-list-item";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchCars } from "../../store/thunks/cars";
import { useDispatch, useSelector } from "react-redux";

import { getCars, getLoading, getError } from "../../store/selectors/cars";
import "./car-list.css";

const CarList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(getCars);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

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
          return <CarListItem key={car.id} id={car.id} />;
        })
      ) : (
        <h1>There are no cars yet</h1>
      )}
    </div>
  );
};

export default CarList;
