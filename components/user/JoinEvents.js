import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

const JoinEvents = ({ profile, events }) => {
  const joinEvent = profile.join ? profile.join : [];
  return (
    <ScrollView>
      {joinEvent.map((join, i) => (
        <View key={i} style={styles.eventContent}>
          <Text style={styles.eventTitle}>{events[join].title}</Text>
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
    height: "100%",
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
  return { profile: state.firebase.profile, events: state.firebase.data.events };
};

export default connect(mapStateToProps)(JoinEvents);
