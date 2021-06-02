import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { editCar } from "../../store/thunks/cars";
import { WithCarService } from "../hoc";

const EditCarPage = ({ carService }) => {
  let { id } = useParams();
  id = Number(id);

  const dispatch = useDispatch();
  const history = useHistory();

  const car = useSelector(({ carsStore }) =>
    carsStore.cars.find((car) => car.id === id)
  );

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch(editCar(carService)({ id, ...values }));
    history.push("/admin");
  };

  const [values, setValues] = useState({
    brand: car?.brand || "",
    model: car?.model || "",
    price: car?.price || "",
    currency: car?.currency || "",
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
            Currency:
            <input
              type="text"
              name="currency"
              onChange={onHandleInputChange}
              placeholder="Input currency"
              value={values.currency}
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

export default WithCarService()(EditCarPage);
