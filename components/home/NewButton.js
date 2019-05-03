import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const NewButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.circle}
      onPress={() => navigation.navigate("NewEvent")}
    >
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 15,
    bottom: 15,
    borderRadius: 100,
    backgroundColor: "#ebbde1"
  },
  text: {
    color: "white",
    marginTop: -5,
    fontSize: 50,
    fontWeight: "200"
  }
});

export default NewButton;
