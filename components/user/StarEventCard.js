import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { addJoinEvent, removeStarEvent } from "../../store/action/AuthAction";
import { addParticipant } from "../../store/action/EventAction";

const EventCard = ({
  eventID,
  detail,
  navigation,
  removeStar,
  addJoin,
  profile,
  addParticipant,
  auth
}) => {
  const stars = profile.stars ? profile.stars : [];
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          detail: detail,
          eventID: eventID,
          userID: auth.uid
        })
      }
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
        </View>
        <View style={styles.buttonContent}>
          <CustomButton
            title="★"
            onPress={() => {
              Alert.alert(
                "Confirm Remove Star",
                "Do you want to remove this event from your star?",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      removeStar(eventID);
                    }
                  }
                ]
              );
            }}
            star={stars.includes(eventID)}
          />
          <CustomButton
            title="+"
            onPress={() => {
              Alert.alert(
                "Confirm Join",
                "Do you want to join this event? \nAfter joining, it cannot be canceled!!",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      addParticipant(eventID, auth.uid);
                      addJoin(eventID);
                    }
                  }
                ]
              );
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CustomButton = ({ title, onPress, star = false }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: star ? "#ebbde0" : "white"
      }}
      onPress={onPress}
    >
      <Text style={{ ...styles.buttonText, color: star ? "#fff600" : "black" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "97%",
    height: 300,
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
    borderBottomColor: "#d9d9db"
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "contain"
  },
  content: {
    height: 120,
    flexDirection: "row",
    marginTop: 3
  },
  dateContent: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    height: "95%"
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
  buttonText: {
    fontSize: 23,
    fontWeight: "bold"
  },
  button: {
    flex: 0.5,
    marginVertical: 3,
    width: "80%",
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
  return { profile: state.firebase.profile, auth: state.firebase.auth };
};
const mapDispatchToProps = dispatch => {
  return {
    removeStar: event => dispatch(removeStarEvent(event)),
    addJoin: event => dispatch(addJoinEvent(event)),
    addParticipant: (eventID, userID) =>
      dispatch(addParticipant(eventID, userID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCard);
