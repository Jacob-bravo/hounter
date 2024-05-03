import { ALL_INDEX_FAIL,ALL_INDEX_REQUEST,ALL_INDEX_SUCCESS } from "../ReducerConstants/Constants";


export const indexSetReducer = (state = { index: 0 }, action) => {
  switch (action.type) {
    case ALL_INDEX_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_INDEX_SUCCESS:
      return {
        loading: false,
        index: action.payload,
      };
    case ALL_INDEX_FAIL:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};