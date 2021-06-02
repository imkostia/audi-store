import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { addNewCar } from "../../store/thunks/cars";
import { generateId } from "../../utils";
import CarFieldsForm from "../car-fields-form";

const NewCarPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const id = useMemo(() => generateId(), []);

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch(addNewCar({ id, ...values }));
    history.push("/admin");
  };

  const [values, setValues] = useState({
    brand: "",
    model: "",
    price: "",
    power: "",
    acceleration: "",
    maxSpeed: "",
    description: "",
  });

  return (
    <div className="new-car-page-container">
      <h2>Editing car with id {id}</h2>
      <CarFieldsForm
        onSubmitForm={onSubmitForm}
        onHandleInputChange={onHandleInputChange}
        values={values}
        buttonName="Create new car"
      />
    </div>
  );
};

export default NewCarPage;
