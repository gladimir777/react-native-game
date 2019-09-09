import { combineReducers } from "redux";
import jqueryFiderReducer from "./jqueryfinderreducer";

export default combineReducers({ gameData: jqueryFiderReducer });
