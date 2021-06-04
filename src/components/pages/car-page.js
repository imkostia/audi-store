import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchCarById } from "../../store/thunks/cars";
import { getCarById } from "../../store/selectors/cars";

import CarDetails from "../car-details";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { getLoading, getError } from "../../store/selectors/cars";

const CarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [id, dispatch]);

  const car = useSelector((store) => getCarById(store, id));
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator errorMessage={error} />;
  }

  return (
    <div>
      <h2>Car {`${car.brand} ${car.model}`}</h2>
      <CarDetails car={car} />
    </div>
  );
};

export default CarPage;
