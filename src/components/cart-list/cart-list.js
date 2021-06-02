import React from "react";
import { useDispatch } from "react-redux";

import "./cart-list.css";
import {
  addCarToCart,
  removeCarFromCart,
  removeCarsFromCart,
} from "../../store/actions/cart";

const CartList = ({ cart, total }) => {
  const dispatch = useDispatch();
  const onIncrease = (carId) => dispatch(addCarToCart(carId));
  const onDecrease = (carId) => dispatch(removeCarFromCart(carId));
  const onDelete = (carId) => dispatch(removeCarsFromCart(carId));

  return (
    <div className="cart-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((cartItem) => {
              return (
                <tr key={cartItem.carId}>
                  <td>{cartItem.carId}</td>
                  <td>
                    {cartItem.brand} {cartItem.model}
                  </td>
                  <td>{cartItem.price}</td>
                  <td>{cartItem.amount}</td>
                  <td>
                    <button onClick={() => onDecrease(cartItem.carId)}>
                      -
                    </button>
                    <button onClick={() => onIncrease(cartItem.carId)}>
                      +
                    </button>
                    <button onClick={() => onDelete(cartItem.carId)}>x</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <p>TOTAL: {total}</p>
    </div>
  );
};

export default CartList;
