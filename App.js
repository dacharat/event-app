import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import MainReducer from "./store/reducers/MainReducer";
import fbConfig from "./config/config";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import MainPage from "./components/MainPage";

const store = createStore(
  MainReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(fbConfig, { userProfile: "users" })
  )
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}