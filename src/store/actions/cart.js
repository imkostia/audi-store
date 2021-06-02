export const addCarToCart = (carId) => {
  return {
    type: "ADD_CAR_TO_CART_REQUEST",
    payload: carId,
  };
};
