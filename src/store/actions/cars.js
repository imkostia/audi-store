export const setLoading = (payload) => {
  return {
    type: "SET_LOADING",
    payload,
  };
};

export const setCars = (payload) => {
  return {
    type: "SET_CARS",
    payload,
  };
};

export const setCar = (car) => {
  return {
    type: "SET_CAR",
    payload: car,
  };
};

export const carsFetchError = (error) => {
  return {
    type: "CARS_FETCH_FAILURE",
    payload: error,
  };
};
