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

export const fetchCars = (carService) => () => (dispatch) => {
  dispatch(carsRequested());

  carService
    .getCars()
    .then((resp) => dispatch(carsLoaded(resp)))
    .catch((error) => dispatch(carsFetchError(error)));
};

// export const carDeleted = (id) => {
//   return {
//     type: "DELETE_CAR_SUCCESS",
//     payload: id,
//   };
// };

export const deleteCar = (carService) => (id) => (dispatch) => {
  dispatch(carsRequested());

  carService
    .deleteCar(id)
    .then((resp) => dispatch(carsLoaded(resp)))
    .catch((error) => dispatch(carsFetchError(error)));
};

export const editCar = (carService) => (car) => (dispatch) => {
  dispatch(carsRequested());

  carService
    .editCar(car)
    .then((resp) => dispatch(carsLoaded(resp)))
    .catch((error) => dispatch(carsFetchError(error)));
};

export const addNewCar = (carService) => (car) => (dispatch) => {
  dispatch(carsRequested());

  carService
    .addNewCar(car)
    .then((resp) => dispatch(carsLoaded(resp)))
    .catch((error) => dispatch(carsFetchError(error)));
};

// export const carEdited = (payload) => {
//   return {
//     type: "EDIT_CAR",
//     payload
//   }
// };

export const addCarToCart = (carId) => {
  return {
    type: "ADD_CAR_TO_CART_REQUEST",
    payload: carId,
  };
};
