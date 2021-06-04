export const carsRequested = () => {
  return {
    type: "FETCH_CARS_REQUEST",
  };
};

export const carsLoaded = (payload) => {
  return {
    type: "FETCH_CARS_SUCCESS",
    payload,
  };
};

export const carLoaded = (car) => {
  return {
    type: "FETCH_CAR_SUCCESS",
    payload: car,
  };
};

export const carsFetchError = (error) => {
  return {
    type: "FETCH_CARS_FETCH_FAILURE",
    payload: error,
  };
};
