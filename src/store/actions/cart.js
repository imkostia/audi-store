export const addCarToCart = (carId) => {
  return {
    type: "ADD_CAR_TO_CART",
    payload: carId,
  };
};

export const removeCarFromCart = (carId) => {
  return {
    type: "REMOVE_CAR_FROM_CART",
    payload: carId,
  };
};

export const removeCarsFromCart = (carId) => {
  return {
    type: "REMOVE_CARS_FROM_CART",
    payload: carId,
  };
};
