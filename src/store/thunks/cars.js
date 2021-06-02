import { carsRequested, carsLoaded, carsFetchError } from "../actions/cars";
import { history } from "../../";
import CarService from "../../services/car-service";

const carService = new CarService();

export const fetchCars = () => (dispatch) => {
  dispatch(carsRequested());

  carService
    .getCars()
    .then((resp) => dispatch(carsLoaded(resp)))
    .catch((error) => dispatch(carsFetchError(error)));
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
