const initialState = {
  cart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CAR_TO_CART":
      const carId = action.payload;
      const cartCopy = [...state.cart];
      const carInCartIndex = state.cart.findIndex((car) => car.carId === carId);

      if (carInCartIndex !== -1) {
        cartCopy[carInCartIndex] = {
          ...state.cart[carInCartIndex],
          amount: state.cart[carInCartIndex].amount + 1,
        };
      } else {
        cartCopy.push({ carId, amount: 1 });
      }

      return {
        ...state,
        cart: cartCopy,
      };
    case "REMOVE_CAR_FROM_CART": {
      const carId = action.payload;
      const cartCopy = [...state.cart];
      const carInCartIndex = state.cart.findIndex((car) => car.carId === carId);

      cartCopy[carInCartIndex] = {
        ...cartCopy[carInCartIndex],
        amount: cartCopy[carInCartIndex].amount - 1,
      };

      if (cartCopy[carInCartIndex].amount < 1) {
        cartCopy.splice(carInCartIndex, 1);
      }

      return {
        ...state,
        cart: cartCopy,
      };
    }
    case "REMOVE_CARS_FROM_CART": {
      const carId = action.payload;
      const cartCopy = [...state.cart];
      const carInCartIndex = state.cart.findIndex((car) => car.carId === carId);

      cartCopy.splice(carInCartIndex, 1);

      return {
        ...state,
        cart: cartCopy,
      };
    }
    default:
      return state;
  }
};

export default cart;
