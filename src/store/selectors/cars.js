export const getCarById = ({ carsStore }, id) => {
  return carsStore.cars.find((car) => car.id === id);
};
