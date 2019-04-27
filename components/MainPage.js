import React from "react";
import { View, StyleSheet } from "react-native";
import AppNavigator from "../navigators/AppNavigator";
import { connect } from "react-redux";
import AuthNavigator from "../navigators/AuthNavigator";
import Login from "./login/Login";

const MainPage = ({ auth }) => {
  return (
    <View style={styles.container}>
      {auth.uid ? <AppNavigator /> : <AuthNavigator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

export default connect(mapStateToProps)(MainPage);
