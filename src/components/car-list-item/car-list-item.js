import React from "react";
import { Link } from "react-router-dom";

import "./car-list-item.css";

class CarListItem extends React.Component {
  render() {
    const { brand, model, price, id } = this.props.car;

    const { onAddToCart } = this.props;
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
  }
}

export default CarListItem;
