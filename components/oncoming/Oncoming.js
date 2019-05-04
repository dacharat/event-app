import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import MyEventCard from "../user/MyEventCard";

const Oncoming = ({ navigation, events, profile }) => {
  const joins = profile.join || [];
  return (
    <ScrollView style={styles.container}>
      {joins.map(join => (
        <MyEventCard key={join} navigation={navigation} detail={events[join]} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: "#f7e5f2"
  }
});

const mapStateToProps = state => {
  return {
    events: state.firebase.data.events,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Oncoming);
