const carsRequested = () => {
  return {
    type: "FETCH_CARS_REQUEST",
  };
};

const carsLoaded = (payload) => {
  return {
    type: "FETCH_CARS_SUCCESS",
    payload,
  };
};

const carsFetchError = (error) => {
  return {
    type: "FETCH_CARS_FETCH_FAILURE",
    payload: error,
  };
};

const addCarToCart = (carId) => {
  return {
    type: "ADD_CAR_TO_CART_REQUEST",
    payload: carId,
  };
};

export { carsLoaded, carsRequested, carsFetchError, addCarToCart };
