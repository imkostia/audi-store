import React, { useEffect } from "react";
import CarFieldsForm from "../car-fields-form";
import { useDispatch, useSelector } from "react-redux";

import { getLoading, getError } from "../../store/selectors/cars";
import { setLoading } from "../../store/actions/cars";
import { addNewCar } from "../../store/thunks/cars";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const NewCarPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);

  const initialFormFields = {
    brand: "",
    model: "",
    price: "",
    power: "",
    acceleration: "",
    maxSpeed: "",
    description: "",
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator errorMessage={error} />;
  }

  return (
    <div className="new-car-page-container">
      <h2>Creating new car</h2>
      <CarFieldsForm
        initialFormFields={initialFormFields}
        submitAction={addNewCar}
        id={""}
        buttonName="Create new car"
      />
    </div>
  );
};

export default NewCarPage;
