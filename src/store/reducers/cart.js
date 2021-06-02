const initialState = {
  cart: [],
};

const updateCartList = (state, carId, quantity) => {
  const cartItemIndex = state.cart.findIndex((car) => car.carId === carId);
  const cartCopy = [...state.cart];
  const cartItem = { ...cartCopy[cartItemIndex] };

  if (cartItemIndex !== -1) {
    cartItem.amount += quantity;
    cartCopy[cartItemIndex] = cartItem;

    if (cartItem.amount < 1) {
      cartCopy.splice(cartItemIndex, 1);
    }
  } else {
    cartCopy.push({ carId, amount: 1 });
  }

  return {
    ...state,
    cart: cartCopy,
  };
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CAR_TO_CART":
      return updateCartList(state, action.payload, 1);

    case "REMOVE_CAR_FROM_CART": {
      return updateCartList(state, action.payload, -1);
    }
    case "REMOVE_CARS_FROM_CART": {
      const cartItem = state.cart.find((car) => car.carId === action.payload);
      return updateCartList(state, action.payload, -cartItem.amount);
    }
    default:
      return state;
  }
};

export default cart;
