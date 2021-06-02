import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addNewCar } from "../../store/thunks/cars";
import { WithCarService } from "../hoc";

import { generateId } from "../../utils";

const NewCarPage = ({ carService }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const id = useMemo(() => generateId(), []);
  // console.log(id); // TODO: ask for difference between ids

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch(addNewCar(carService)({ id, ...values }));
    history.push("/admin");
  };

  const [values, setValues] = useState({
    brand: "",
    model: "",
    price: "",
    currency: "",
    power: "",
    acceleration: "",
    maxSpeed: "",
    description: "",
  });

  return (
    <div className="new-car-page-container">
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

        <button>Create a car</button>
      </form>
    </div>
  );
};

export default WithCarService()(NewCarPage);
