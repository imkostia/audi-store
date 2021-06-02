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

export const carsFetchError = (error) => {
  return {
    type: "FETCH_CARS_FETCH_FAILURE",
    payload: error,
  };
};
