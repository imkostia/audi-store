import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import "./car-fields-form.css";

const validateFields = (fields) => {
  return Object.values(fields).every(Boolean);
};

const CarFieldsForm = ({ initialFormFields, action, buttonName, id }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [fields, setFields] = useState(initialFormFields);

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (validateFields(fields)) {
      setError(false);
      dispatch(action({ id, ...fields }));
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={onSubmitForm} className="car-fields-form">
      <div className="car-fields-form__items">
        <div className="car-fields-form__item">
          <label htmlFor="brand" className="car-fields-form__label">
            Brand*:
          </label>
          <input
            id="brand"
            type="text"
            name="brand"
            onChange={onHandleInputChange}
            placeholder="Input brand"
            value={fields.brand}
            className="car-fields-form__input"
          />
        </div>
        <div className="car-fields-form__item">
          <label htmlFor="model" className="car-fields-form__label">
            Model*:
          </label>
          <input
            type="text"
            name="model"
            id="model"
            onChange={onHandleInputChange}
            placeholder="Input model"
            value={fields.model}
            className="car-fields-form__input"
          />
        </div>
        <div className="car-fields-form__item">
          <label htmlFor="price" className="car-fields-form__label">
            Price*:
          </label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={onHandleInputChange}
            placeholder="Input price"
            value={fields.price}
            className="car-fields-form__input"
          />
        </div>
        <div className="car-fields-form__item">
          <label htmlFor="power" className="car-fields-form__label">
            Power*:
          </label>
          <input
            type="text"
            name="power"
            id="power"
            onChange={onHandleInputChange}
            placeholder="Input power"
            value={fields.power}
            className="car-fields-form__input"
          />
        </div>
        <div className="car-fields-form__item">
          <label htmlFor="acceleration" className="car-fields-form__label">
            Acceleration*:
          </label>
          <input
            type="text"
            name="acceleration"
            id="acceleration"
            onChange={onHandleInputChange}
            placeholder="Input acceleration"
            value={fields.acceleration}
            className="car-fields-form__input"
          />
        </div>
        <div className="car-fields-form__item">
          <label htmlFor="maxSpeed" className="car-fields-form__label">
            Max speed*:
          </label>
          <input
            type="text"
            name="maxSpeed"
            id="maxSpeed"
            onChange={onHandleInputChange}
            placeholder="Input max speed"
            value={fields.maxSpeed}
            className="car-fields-form__input"
          />
        </div>
        <div className="car-fields-form__item full-width">
          <label htmlFor="description" className="car-fields-form__label">
            Description*:
          </label>
          <textarea
            name="description"
            id="description"
            onChange={onHandleInputChange}
            placeholder="Input description"
            value={fields.description}
            className="car-fields-form__input"
          ></textarea>
        </div>
      </div>

      <div>
        {error && <span style={{ color: "red" }}>Please, fill all fields</span>}
      </div>

      <button>{buttonName}</button>
    </form>
  );
};

CarFieldsForm.defaultProps = {
  buttonName: "Submit form",
};

CarFieldsForm.propTypes = {
  initialFormFields: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  buttonName: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default CarFieldsForm;
