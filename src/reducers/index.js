const initialState = {
  cars: [],
  loading: true,
  error: null,
  selectedCars: [],
  orderTotal: "2000000",
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_CARS_REQUEST":
      return {
        ...state,
        cars: [],
        loading: true,
        error: null,
      };
    case "FETCH_CARS_SUCCESS":
      return {
        ...state,
        cars: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_CARS_FETCH_FAILURE":
      return {
        ...state,
        cars: [],
        loading: false,
        error: action.payload,
      };

    case "ADD_CAR_TO_CART_REQUEST":
      const carId = action.payload;
      const car = state.cars.find((car) => car.id === carId);
      const newCar = {
        id: car.id,
        brand: car.brand,
        model: car.model,
        startPrice: car.startPrice,
        currency: car.currency,
        imageUrl: car.imageUrl,
        value: car.value + 1 || 1,
      };
      return {
        ...state,
        selectedCars: [...state.selectedCars, newCar],
      };
    default:
      return state;
  }
};

export default reducer;
