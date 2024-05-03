import { ALL_INDEX_FAIL,ALL_INDEX_SUCCESS } from "../ReducerConstants/Constants";

export const setIndex = (index) => async (dispatch) => {
    try {
      dispatch({
        type: ALL_INDEX_SUCCESS,
        payload: index,
      })
    } catch (error) {
      dispatch({
        type: ALL_INDEX_FAIL,
        payload: error.response.data.message,
      });
    }
  }