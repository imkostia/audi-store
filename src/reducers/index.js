const initialState = {
  cars: [],
  loading: true,
  error: null,
  selectedCars: [],
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_CARS_REQUEST":
      console.log("STATE BEFORE => ", state);
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

    // case "DELETE_CAR": {
    //   const newCars = state.cars.filter((car) => car.id !== action.payload);
    //   return {
    //     ...state,
    //     cars: newCars,
    //   };
    // }

    // case "EDIT_CAR": {
    //   const index = state.cars.findIndex((car) => car.id === action.payload.id);
    //   const newCars = [...state.cars];
    //   newCars[index] = action.payload;

    //   return {
    //     ...state,
    //     cars: newCars,
    //   };
    // }

    case "ADD_CAR_TO_CART_REQUEST":
      const carId = action.payload;
      const car = state.cars.find((car) => car.id === carId);
      const newCar = {
        id: car.id,
        brand: car.brand,
        model: car.model,
        price: car.price,
        currency: car.currency,
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
