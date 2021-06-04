import {
  carsRequested,
  carsLoaded,
  carsFetchError,
  carLoaded,
} from "../actions/cars";
import { history } from "../../";
import { getCarById } from "../selectors/cars";

import CarService from "../../services/car-service";
const carService = new CarService();

export const fetchCars = () => (dispatch) => {
  dispatch(carsRequested());

  carService
    .getCars()
    .then((resp) => dispatch(carsLoaded(resp)))
    .catch((error) => dispatch(carsFetchError(error)));
};

export const fetchCarById = (id) => (dispatch, getState) => {
  const carFromStore = getCarById(getState(), id);

  if (!carFromStore) {
    dispatch(carsRequested());

    carService
      .getCarById(id)
      .then((car) => dispatch(carLoaded(car)))
      .catch((error) => dispatch(carsFetchError(error)));
  }
};

export const deleteCar = (id) => (dispatch) => {
  dispatch(carsRequested());

  carService
    .deleteCar(id)
    .then((resp) => dispatch(carsLoaded(resp)))
    .catch((error) => dispatch(carsFetchError(error)));
};

export const editCar = (car) => (dispatch) => {
  carService
    .editCar(car)
    .then((_) => history.push("/admin"))
    .catch((error) => dispatch(carsFetchError(error)));
};

export const addNewCar = (car) => (dispatch) => {
  carService
    .addNewCar(car)
    .then((_) => history.push("/admin"))
    .catch((error) => dispatch(carsFetchError(error)));
};
