const initialState = {
  cars: [],
  loading: true,
  error: null,
};

const cars = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default cars;
