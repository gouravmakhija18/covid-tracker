import * as types from "../constants/ActionTypes";

const initialState = {
  apiResponseObj: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RUNTIME_DATA: {
      return { ...state, apiResponseObj: action.payload, loading: false };
    }

    case types.SET_LOADING: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};
