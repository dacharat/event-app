import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addJoinEvent, addStarEvent } from "../../store/action/AuthAction";

const EventCard = ({
  eventID,
  detail,
  navigation,
  addStar,
  addJoin,
  profile
}) => {
  const stars = profile.stars ? profile.stars : [];
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
          <CustomButton
            title="⭐️"
            onPress={() => addStar(eventID)}
            star={stars.includes(eventID)}
          />
          <CustomButton title="+" onPress={() => addJoin(eventID)} />
        </View>
      </View>
      <Text style={styles.description}>
        {detail.description.substring(0, 50)}
      </Text>
      <Text style={styles.time}>{detail.date + " " + detail.time}</Text>
    </TouchableOpacity>
  );
};

const CustomButton = ({ title, onPress, star = false }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: star ? "#f7ff70" : "white" }}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    marginVertical: 5
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
  button: {
    marginTop: 10,
    marginRight: 30,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100
  },
  time: {
    margin: 10,
    marginTop: 0
  }
});

const mapStateToProps = state => {
  return { profile: state.firebase.profile };
};
const mapDispatchToProps = dispatch => {
  return {
    addStar: event => dispatch(addStarEvent(event)),
    addJoin: event => dispatch(addJoinEvent(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCard);
