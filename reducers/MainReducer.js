import { combineReducers } from "redux";
import { eventReducer } from "./EventReducer";

export default combineReducers({
  events: eventReducer
})