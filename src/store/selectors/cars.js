import { createSelector } from "reselect";

export const getCars = (state) => {
  return state.carsStore.cars;
};

export const getLoading = (state) => {
  return state.carsStore.loading;
};

export const getError = (state) => {
  return state.carsStore.error;
};

export const getCarById = createSelector(
  getCars,
  (_, id) => id,
  (cars, id) => {
    return cars.find((car) => car.id === id);
  }
);
