import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const DecisionButton = ({ detail, addJoin, addStar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.favourite}
          onPress={() => addStar(detail)}
        >
          <Text style={styles.favouriteText}>⭐️</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.add} onPress={() => addJoin(detail)}>
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

const mapDispatchToProps = dispatch => {
  return {
    addStar: event =>
      dispatch({ type: "ADD_STARS_EVENT", payload: event.title }),
    addJoin: event => dispatch({ type: "JOIN_EVENT", payload: event.title })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DecisionButton);
