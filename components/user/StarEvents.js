import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import StarEventCard from "./StarEventCard";

const StarEvents = ({ profile, events, navigation }) => {
  let stars = profile.stars || [];
  stars = stars.filter(star => !profile.join.includes(star));
  return (
    <ScrollView style={styles.eventContent}>
      {stars.map(star => (
        <StarEventCard
          key={star}
          navigation={navigation}
          eventID={star}
          detail={events[star]}
        />
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

export default connect(mapStateToProps)(StarEvents);
