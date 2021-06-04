import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { editCar, fetchCarById } from "../../store/thunks/cars";
import { getCarById } from "../../store/selectors/cars";
import CarFieldsForm from "../car-fields-form";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const EditCarPage = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [id, dispatch]);

  const car = useSelector((store) => getCarById(store, id));
  const { loading, error } = useSelector(({ carsStore }) => carsStore);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator errorMessage={error} />;
  }

  const initialFormFields = {
    brand: car.brand || "",
    model: car.model || "",
    price: car.price || "",
    power: car.power || "",
    acceleration: car.acceleration || "",
    maxSpeed: car.maxSpeed || "",
    description: car.description || "",
  };

  return (
    <div className="edit-car-page-container">
      <h2>
        Editing car {car.brand} {car.model} ({car.id})
      </h2>
      <CarFieldsForm
        initialFormFields={initialFormFields}
        action={editCar}
        id={car.id}
        buttonName="Edit car"
      />
    </div>
  );
};

export default EditCarPage;
