import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addJoinEvent, addStarEvent } from "../../store/action/AuthAction";
import Icon from "react-native-vector-icons/FontAwesome";

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
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={
            detail.img
              ? { uri: detail.img }
              : require("../../assets/no_image.jpg")
          }
        />
      </View>
      <View style={styles.content}>
        <View style={styles.dateContent}>
          <Text style={styles.dateContentDay}>{detail.date.split(" ")[1]}</Text>
          <Text style={styles.dateContentDay}>{detail.date.split(" ")[0]}</Text>
          <Text style={styles.dateContentTime}>{detail.time}</Text>
        </View>
        <View style={styles.titleContent}>
          <Text numberOfLines={1} style={styles.title}>
            {detail.title}
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {detail.description.length > 50
              ? detail.description.substring(0, 47) + "..."
              : detail.description}
          </Text>
          <Icon name="location-arrow">
            <Text>
              {detail.place ? "  " + detail.place : "  No location added"}
            </Text>
          </Icon>
        </View>
        <View style={styles.buttonContent}>
          <CustomButton
            title="⭐️"
            onPress={() => addStar(eventID)}
            star={stars.includes(eventID)}
          />
          <CustomButton title="+" onPress={() => addJoin(eventID)} />
        </View>
      </View>
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
    width: "97%",
    height: 270,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    marginBottom: 7,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4
  },
  imageView: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#b6b7ba"
  },
  image: {
    width: "100%",
    height: 135,
    resizeMode: "contain"
  },
  content: {
    flexDirection: "row",
    marginTop: 3
  },
  dateContent: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  dateContentDay: {
    fontSize: 20,
    fontWeight: "800"
  },
  dateContentTime: {
    fontSize: 16,
    fontWeight: "800"
  },
  titleContent: { flex: 0.6 },
  title: {
    fontSize: 25,
    padding: 5
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
  buttonContent: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    height: "90%"
  },
  button: {
    flex: 0.5,
    marginTop: 10,
    width: "80%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#b6b7ba",
    borderWidth: 0.5
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
