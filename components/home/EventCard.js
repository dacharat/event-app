import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const EventCard = ({ detail, navigation, addStar, addJoin }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { detail: detail })}
      style={styles.card}
    >
      <Image
        style={styles.image}
        source={
          detail.img
            ? { uri: detail.img }
            : require("../../assets/no_image.jpg")
        }
      />
      <View style={styles.inline}>
        <Text style={styles.title}>{detail.title}</Text>
        <View style={styles.buttonInline}>
          <CustomButton title="⭐️" onPress={() => addStar(detail)} />
          <CustomButton title="+" onPress={() => addJoin(detail)} />
        </View>
      </View>
      <Text style={styles.description}>
        {detail.description.substring(0, 50)}
      </Text>
      <Text style={styles.time}>{detail.date + " " + detail.time}</Text>
    </TouchableOpacity>
  );
};

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonInline} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain"
  },
  title: {
    fontSize: 25,
    margin: 7
  },
  description: {
    color: "#a1a2a3",
    margin: 10,
    marginTop: 0
  },
  inline: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  buttonInline: {
    marginTop: 10,
    marginRight: 30,
    flexDirection: "row"
  },
  time: { margin: 10, marginTop: 0 }
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
)(EventCard);
