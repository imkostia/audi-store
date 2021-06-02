import React from "react";
import "./car-list-item.css";

class CarListItem extends React.Component {
  render() {
    const { brand, model, price, currency } = this.props.car;

    const { onAddToCart } = this.props;
    return (
      <div className="car-list-item">
        <div className="car-list-item__title">
          {brand} {model}
        </div>
        <div className="car-list-item__price">
          <span>
            Від {price} {currency}
          </span>
        </div>
        <div className="car-list-item__buttons">
          <button>Дізнатись більше</button>
          <button onClick={onAddToCart}>Додати в кошик</button>
        </div>
      </div>
    );
  }
}

export default CarListItem;
