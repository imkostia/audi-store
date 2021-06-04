import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addCarToCart } from "../../store/actions/cart";
import { getCarById } from "../../store/selectors/cars";
import "./car-list-item.css";

const CarListItem = ({ id }) => {
  const dispatch = useDispatch();

  const car = useSelector((store) => getCarById(store, id));
  const onAddToCart = () => dispatch(addCarToCart(id));

  return (
    <div className="car-list-item">
      <div className="car-list-item__title">
        {car.brand} {car.model}
      </div>
      <div className="car-list-item__price">
        <span>From {car.price} $</span>
      </div>
      <div className="car-list-item__buttons">
        <Link to={`/cars/${car.id}`}>
          <button>Learn more</button>
        </Link>

        <button onClick={onAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

CarListItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CarListItem;
