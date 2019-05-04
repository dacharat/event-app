import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { connect } from "react-redux";
import { addStarEvent, addJoinEvent } from "../../store/action/AuthAction";

const DecisionButton = ({ eventID, addJoin, addStar }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.favourite}
        onPress={() => addStar(eventID)}
      >
        <Text style={styles.favouriteText}>⭐️</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.add}
        onPress={() => {
          Alert.alert(
            "Confirm Join",
            "Do you want to join this event? \nAfter joining, it cannot be canceled!!",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "OK",
                onPress: () => addJoin(eventID)
              }
            ]
          );
        }}
      >
        <Text style={styles.addText}>Join</Text>
      </TouchableOpacity>
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
    flexDirection: "row",
    margin: 0
  },
  button: { width: "50%" },
  favourite: {
    flex: 0.3,
    height: "100%",
    backgroundColor: "#b772d7",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  add: {
    flex: 0.7,
    height: "100%",
    backgroundColor: "#de90cd",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  favouriteText: {
    fontSize: 30
  },
  addText: {
    position: "absolute",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    margin: 0
  }
});

const mapDispatchToProps = dispatch => {
  return {
    addStar: event => dispatch(addStarEvent(event)),
    addJoin: event => dispatch(addJoinEvent(event))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DecisionButton);
