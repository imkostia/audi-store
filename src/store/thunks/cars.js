import { carsRequested, carsLoaded, carsFetchError } from "../actions/cars";

export const fetchCars = (carService) => () => (dispatch) => {
  dispatch(carsRequested());

  carService
    .getCars()
    .then((resp) => dispatch(carsLoaded(resp)))
    .catch((error) => dispatch(carsFetchError(error)));
};

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
