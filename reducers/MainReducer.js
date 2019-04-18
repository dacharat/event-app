import { combineReducers } from "redux";
import { eventReducer } from "./EventReducer";
import { authReducer } from "./AuthReducer";

export default combineReducers({
  events: eventReducer,
  auth: authReducer
});
