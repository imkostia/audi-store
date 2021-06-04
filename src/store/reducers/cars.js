const initialState = {
  cars: [],
  loading: true,
  error: null,
};

const cars = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_CARS":
      return {
        ...state,
        cars: action.payload,
        loading: false,
        error: null,
      };

    case "SET_CAR": {
      return {
        ...state,
        cars: [...state.cars, action.payload],
        loading: false,
        error: null,
      };
    }

    case "CARS_FETCH_FAILURE":
      return {
        ...state,
        cars: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cars;
