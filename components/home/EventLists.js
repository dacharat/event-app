import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import EventCard from "./EventCard";

import { connect } from "react-redux";

const EventList = ({ events, navigation }) => {
  return (
    <ScrollView style={styles.contentContainer}>
      {events.map((event, i) => (
        <EventCard key={i} navigation={navigation} detail={event} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    paddingVertical: 5
  }
});

const mapStateToProps = state => {
  return { events: state.events };
};

export default connect(mapStateToProps)(EventList);
