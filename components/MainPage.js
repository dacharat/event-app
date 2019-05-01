import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AppNavigator from "../navigators/AppNavigator";
import { connect } from "react-redux";
import AuthNavigator from "../navigators/AuthNavigator";
import imageBg from "../assets/background.jpg";

const MainPage = ({ auth }) => {
  return (
    <View style={styles.container}>
      {auth.uid ? (
        <AppNavigator />
      ) : (
        <ImageBackground style={styles.imgBackground} source={imageBg}>
          <AuthNavigator style={{ backgroundColor: "transparent" }} />
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  imgBackground: {
    height: "100%",
    width: '100%'
  }
});

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

export default connect(mapStateToProps)(MainPage);
