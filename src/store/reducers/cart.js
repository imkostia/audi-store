const initialState = {
  cart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CAR_TO_CART_REQUEST":
      const carId = action.payload;
      const newCar = { carId, amount: 1 };
      return {
        ...state,
        cart: [...state.cart, newCar],
      };
    default:
      return state;
  }
};

export default cart;
