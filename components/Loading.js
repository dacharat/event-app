import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { BarIndicator } from "react-native-indicators";
import bgImg from "../assets/background.jpg";

const Loading = () => {
  return (
    <ImageBackground source={bgImg} style={styles.imgBackground}>
      <View style={styles.container}>
        <BarIndicator count={7} size={30} color="white" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    height: "100%",
    width: "100%",
    opacity: 0.7
  },
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Loading;
