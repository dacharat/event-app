import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import MyEventCard from "./MyEventCard";

// navigation.navigate("StarEvents")
const JoinEvents = ({ profile, events, navigation }) => {
  const myEvents = Object.keys(events).filter(
    event => events[event].createBy === profile.username
  );

  return (
    <ScrollView style={styles.eventContent}>
      {myEvents.map(me => (
        <MyEventCard key={me} detail={events[me]} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventContent: {
    padding: 10,
    backgroundColor: "#f7e5f2"
  }
});

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    events: state.firebase.data.events
  };
};

export default connect(mapStateToProps)(JoinEvents);
