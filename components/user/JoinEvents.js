import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

const JoinEvents = ({ auth }) => {
  return (
    <ScrollView>
      {auth.join.map((j, i) => (
        <View key={i} style={styles.eventContent}>
          <Text style={styles.eventTitle}>{j}</Text>
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
  return { auth: state.auth };
};

export default connect(mapStateToProps)(JoinEvents);
