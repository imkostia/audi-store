import React from "react";
import { connect } from "react-redux";

import "./cart-list.css";

class CartList extends React.Component {
  render() {
    const { items, total } = this.props;

    return (
      <div className="cart-container">
        {items &&
          items.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <div className="cart-item__title">
                  {item.brand} {item.model}
                </div>
                <div className="cart-item__image">
                  <img src={item.imageUrl} alt="car" />
                </div>
                <div className="cart-item__price">{item.startPrice} грн.</div>
                <div className="cart-item__nav">
                  <button>-</button>
                  <button>+</button>
                  <button>x</button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = ({ selectedCars, orderTotal }) => {
  return {
    items: selectedCars,
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(CartList);