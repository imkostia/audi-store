import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import CartList from "../cart-list";

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

const CartPage = () => {
  const { cartStore, carsStore } = useSelector((store) => store);

  const { cars } = carsStore;
  const { cart } = cartStore;

  const carsInCart = useMemo(() => getCarsInfo(cart, cars), [cart, cars]);

  if (!carsInCart || !carsInCart.length) {
    return <h1>Your cart is empty</h1>;
  }

  return <CartList cart={carsInCart} />;
};

export default CartPage;
