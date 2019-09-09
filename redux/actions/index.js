import {
  GET_DATA_INIT,
  GET_DATA_SUCCES,
  GET_DATA_FAILURE,
  IS_JQUERY_CLICKED,
  GET_HI_SCORE,
  RESET_SCORE
} from "../types";

// These three functions below are action creators and we will invoke them in our getData function at the end of the file
getDataInit = () => {
  return {
    type: GET_DATA_INIT
  };
};

getDataSucces = () => {
  return {
    type: GET_DATA_SUCCES
  };
};

getDataFailure = error => {
  return {
    type: GET_DATA_FAILURE,
    payload: error
  };
};

export function getHiScore() {
  return dispatch => {
    dispatch({
      type: GET_HI_SCORE
    });
  };
}

export function resetScore() {
  return dispatch => {
    dispatch({
      type: RESET_SCORE
    });
  };
}
export function isJqueryClicked(data) {
  return dispatch => {
    dispatch({
      type: IS_JQUERY_CLICKED,
      payload: data
    });
  };
}
// this fuction is helpful if we get fetch data from a back-end with some async behavior
export function getData() {
  return dispatch => {
    dispatch(getDataInit());
    try {
      dispatch(getDataSucces());
    } catch (error) {
      dispatch(getDataFailure(error));
    }
  };
}
