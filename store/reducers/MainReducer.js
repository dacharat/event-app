import { combineReducers } from "redux";
import { eventReducer } from "./EventReducer";
import { authReducer } from "./AuthReducer";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  events: eventReducer,
  auth: authReducer,
  firebase: firebaseReducer
});
