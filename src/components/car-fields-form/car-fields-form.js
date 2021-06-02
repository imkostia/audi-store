import React from "react";

import "./car-fields-form.css";

const CarFieldsForm = ({
  onSubmitForm,
  onHandleInputChange,
  values,
  buttonName,
}) => {
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
            value={values.brand}
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
            value={values.model}
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
            value={values.price}
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
            value={values.power}
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
            value={values.acceleration}
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
            placeholder="Input maxSpeed"
            value={values.maxSpeed}
            className="car-fields-form__input"
          />
        </div>
        <div className="car-fields-form__item">
          <label htmlFor="description" className="car-fields-form__label">
            Description*:
          </label>
          <textarea
            name="description"
            id="description"
            onChange={onHandleInputChange}
            placeholder="Input description"
            value={values.description}
            className="car-fields-form__input"
          ></textarea>
        </div>
      </div>

      <button>{buttonName}</button>
    </form>
  );
};

export default CarFieldsForm;
