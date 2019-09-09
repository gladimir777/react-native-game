import initialState from "./initialState";
import {
  GET_DATA_INIT,
  GET_DATA_SUCCES,
  GET_DATA_FAILURE,
  IS_JQUERY_CLICKED,
  GET_HI_SCORE,
  RESET_SCORE
} from "../../types";

const jqueryFinderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_INIT:
      return {
        ...state,
        loading: true
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_DATA_SUCCES:
      return {
        ...state,
        loading: false,
        error: null
      };
    case GET_HI_SCORE:
      let hiScore = state.score > state.hiScore ? state.score : state.hiScore;

      return {
        ...state,
        hiScore
      };
    case RESET_SCORE:
      return {
        ...state,
        score: 0
      };
    case IS_JQUERY_CLICKED:
      let score = 0;
      if (action.payload == "jQuery") {
        score++;
      }
      return {
        ...state,
        loading: false,
        error: null,
        score: state.score + score
      };
    default:
      return state;
  }
};

export default jqueryFinderReducer;
