import React from "react";
import { useDispatch } from "react-redux";

import "./cart-list.css";
import {
  addCarToCart,
  removeCarFromCart,
  removeCarsFromCart,
} from "../../store/actions/cart";

const CartList = ({ cart }) => {
  const dispatch = useDispatch();

  const onIncrease = (carId) => dispatch(addCarToCart(carId));
  const onDecrease = (carId) => dispatch(removeCarFromCart(carId));
  const onDelete = (carId) => dispatch(removeCarsFromCart(carId));

  return (
    <div className="cart-container">
      {cart &&
        cart.map((cartItem) => {
          return (
            <div key={cartItem.carId} className="cart-item">
              <div className="cart-item__id">{cartItem.carId}</div>
              <div className="cart-item__amount">{cartItem.amount}</div>
              <div className="cart-item__nav">
                <button onClick={() => onDecrease(cartItem.carId)}>-</button>
                <button onClick={() => onIncrease(cartItem.carId)}>+</button>
                <button onClick={() => onDelete(cartItem.carId)}>x</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CartList;
