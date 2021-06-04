import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { getCars } from "../../store/selectors/cars";
import { getCart } from "../../store/selectors/cart";

import "./cart-list.css";
import {
  addCarToCart,
  removeCarFromCart,
  removeCarsFromCart,
} from "../../store/actions/cart";

const getTotalValue = (cart) => {
  return cart.reduce((prev, cur) => {
    prev += cur.amount * cur.price;

    return prev;
  }, 0);
};

const getCarsInfo = (cart, cars) => {
  return cart.reduce((prev, cur) => {
    const carItem = cars.find((car) => car.id === cur.carId);
    prev.push({
      brand: carItem.brand,
      model: carItem.model,
      price: carItem.price,
      carId: cur.carId,
      amount: cur.amount,
    });
    return prev;
  }, []);
};

const CartList = () => {
  const dispatch = useDispatch();
  const onIncrease = (carId) => dispatch(addCarToCart(carId));
  const onDecrease = (carId) => dispatch(removeCarFromCart(carId));
  const onDelete = (carId) => dispatch(removeCarsFromCart(carId));

  const cars = useSelector(getCars);
  const cart = useSelector(getCart);

  const carsInCart = useMemo(() => getCarsInfo(cart, cars), [cart, cars]);

  if (!carsInCart || !carsInCart.length) {
    return <h1>Your cart is empty</h1>;
  }

  const total = getTotalValue(cart);

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
                  <td>{cartItem.price} $</td>
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
      <p>TOTAL: {total} $</p>
    </div>
  );
};

CartList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
};

export default CartList;
