import React from "react";
import { Link } from "react-router-dom";

import "./car-list-item.css";

const CarListItem = ({ car, onAddToCart }) => {
  const { brand, model, price, id } = car;

  return (
    <div className="car-list-item">
      <div className="car-list-item__title">
        {brand} {model}
      </div>
      <div className="car-list-item__price">
        <span>From {price} $</span>
      </div>
      <div className="car-list-item__buttons">
        <Link to={`/cars/${id}`}>
          <button>Learn more</button>
        </Link>

        <button onClick={onAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default CarListItem;
