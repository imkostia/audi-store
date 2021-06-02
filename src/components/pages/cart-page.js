import React from "react";
import { useSelector } from "react-redux";

import CartList from "../cart-list";

const CartPage = () => {
  const { cart } = useSelector(({ cartStore }) => cartStore);

  if (!cart || !cart.length) {
    return <h1>Your cart is empty</h1>;
  }

  return <CartList cart={cart} />;
};

export default CartPage;
