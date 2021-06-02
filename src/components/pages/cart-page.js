import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import CartList from "../cart-list";

const getTotalValue = (cars) => {
  return cars.reduce((prev, cur) => {
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

const CartPage = () => {
  const { cart } = useSelector(({ cartStore }) => cartStore);
  const { cars } = useSelector(({ carsStore }) => carsStore);

  const carsInfo = useMemo(() => getCarsInfo(cart, cars), [cart, cars]);
  const total = useMemo(() => getTotalValue(carsInfo), [carsInfo]);

  if (!carsInfo || !carsInfo.length) {
    return <h1>Your cart is empty</h1>;
  }

  return <CartList cart={carsInfo} total={total} />;
};

export default CartPage;
