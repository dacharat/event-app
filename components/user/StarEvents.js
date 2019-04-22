import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Alert
} from "react-native";
import { connect } from "react-redux";

const StarEvents = ({ auth, deleteStarEvent }) => {
  return (
    <ScrollView>
      {auth.stars.map((star, i) => (
        <View key={i} style={styles.eventContent}>
          <Text style={styles.eventTitle}>{star}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Alert.alert(
                "Confirm delete",
                "Do you want to remove this event from your stars?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  {
                    text: "OK",
                    onPress: () => deleteStarEvent(star)
                  }
                ]
              );
            }}
          >
            <Text style={styles.buttonText}>&times;</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventContent: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 30,
    flex: 2,
    borderWidth: 0.5
  }, 
  eventTitle: {
    height: '100%',
    fontSize: 25
  },
  button: {
    width: 30,
    height: 30
  },
  buttonText: {
    fontSize: 25
  }
});

const mapStateToProps = state => {
  return { auth: state.auth };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteStarEvent: event =>
      dispatch({ type: "REMOVE_STARS_EVENT", payload: event })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarEvents);
