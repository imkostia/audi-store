import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { editCar } from "../../store/thunks/cars";
import CarFieldsForm from "../car-fields-form";

const EditCarPage = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  const car = useSelector(({ carsStore }) =>
    carsStore.cars.find((car) => car.id === id)
  );

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch(editCar({ id, ...values }));
  };

  const [values, setValues] = useState({
    brand: car?.brand || "",
    model: car?.model || "",
    price: car?.price || "",
    power: car?.power || "",
    acceleration: car?.acceleration || "",
    maxSpeed: car?.maxSpeed || "",
    description: car?.description || "",
  });

  return (
    <div className="edit-car-page-container">
      <h2>Editing car with id {id}</h2>
      <CarFieldsForm
        onSubmitForm={onSubmitForm}
        onHandleInputChange={onHandleInputChange}
        values={values}
        buttonName="Edit car"
      />
    </div>
  );
};

export default EditCarPage;
