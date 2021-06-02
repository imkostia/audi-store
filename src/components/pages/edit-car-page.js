import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { editCar } from "../../store/thunks/cars";

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
      <form onSubmit={onSubmitForm}>
        <div>
          <label>
            Brand:
            <input
              type="text"
              name="brand"
              onChange={onHandleInputChange}
              placeholder="Input brand"
              value={values.brand}
            />
          </label>
        </div>
        <div>
          <label>
            Model:
            <input
              type="text"
              name="model"
              onChange={onHandleInputChange}
              placeholder="Input model"
              value={values.model}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="text"
              name="price"
              onChange={onHandleInputChange}
              placeholder="Input price"
              value={values.price}
            />
          </label>
        </div>
  
        <div>
          <label>
            Power:
            <input
              type="text"
              name="power"
              onChange={onHandleInputChange}
              placeholder="Input power"
              value={values.power}
            />
          </label>
        </div>

        <div>
          <label>
            Acceleration:
            <input
              type="text"
              name="acceleration"
              onChange={onHandleInputChange}
              placeholder="Input acceleration"
              value={values.acceleration}
            />
          </label>
        </div>

        <div>
          <label>
            Max speed:
            <input
              type="text"
              name="maxSpeed"
              onChange={onHandleInputChange}
              placeholder="Input maxSpeed"
              value={values.maxSpeed}
            />
          </label>
        </div>

        <div>
          <label>
            Description:
            <textarea
              name="description"
              onChange={onHandleInputChange}
              placeholder="Input description"
              value={values.description}
            ></textarea>
          </label>
        </div>

        <button>Edit car</button>
      </form>
    </div>
  );
};

export default EditCarPage;
