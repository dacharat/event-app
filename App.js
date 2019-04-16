import React from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./navigators/AppNavigator";

import { Provider } from "react-redux";
import { createStore } from "redux";
import MainReducer from "./reducers/MainReducer";

const store = createStore(MainReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
