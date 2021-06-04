import { setLoading, setCars, setCar, carsFetchError } from "../actions/cars";
import { history } from "../../";
import { getCarById } from "../selectors/cars";

import CarService from "../../services/car-service";
const carService = new CarService();

export const fetchCars = () => (dispatch) => {
  dispatch(setLoading(true));

  carService
    .getCars()
    .then((resp) => dispatch(setCars(resp)))
    .catch((error) => dispatch(carsFetchError(error)));
};

export const fetchCarById = (id) => (dispatch, getState) => {
  const carFromStore = getCarById(getState(), id);

  if (!carFromStore) {
    dispatch(setLoading(true));

    carService
      .getCarById(id)
      .then((car) => dispatch(setCar(car)))
      .catch((error) => dispatch(carsFetchError(error)));
  }
};

export const deleteCar = (id) => (dispatch) => {
  dispatch(setLoading(true));

  carService
    .deleteCar(id)
    .then((resp) => dispatch(setCars(resp)))
    .catch((error) => dispatch(carsFetchError(error)));
};

export const editCar = (car) => (dispatch) => {
  dispatch(setLoading(true));

  carService
    .editCar(car)
    .then((_) => history.push("/admin"))
    .catch((error) => dispatch(carsFetchError(error)));
};

export const addNewCar = (car) => (dispatch) => {
  dispatch(setLoading(true));

  carService
    .addNewCar(car)
    .then((_) => history.push("/admin"))
    .catch((error) => dispatch(carsFetchError(error)));
};
