import React from "react";
import CarFieldsForm from "../car-fields-form";

import { addNewCar } from "../../store/thunks/cars";

const NewCarPage = () => {
  const initialFormFields = {
    brand: "",
    model: "",
    price: "",
    power: "",
    acceleration: "",
    maxSpeed: "",
    description: "",
  };

  return (
    <div className="new-car-page-container">
      <h2>Creating new car</h2>
      <CarFieldsForm
        initialFormFields={initialFormFields}
        onSubmitAction={addNewCar}
        id={""}
        buttonName="Create new car"
      />
    </div>
  );
};

export default NewCarPage;
