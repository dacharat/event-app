import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const DecisionButton = ({ detail }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.favourite}
          onPress={() => alert("Favourite " + detail.title)}
        >
          <Text style={styles.favouriteText}>⭐️</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.add}
          onPress={() => alert("Add " + detail.title)}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    flexDirection: "row",
    margin: 0
  },
  button: { width: "50%" },
  favourite: {
    height: "100%",
    backgroundColor: "#fc4141",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },
  add: {
    height: "100%",
    backgroundColor: "#42f46e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },
  favouriteText: {
    fontSize: 30
  },
  addText: {
    position: "absolute",
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    margin: 0
  }
});

export default DecisionButton;
