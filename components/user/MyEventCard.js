import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MyEventCard = ({ detail, navigation }) => {
  const participant = detail.participant || [];
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MyEventDetail", { detail: detail })}
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
        <View style={styles.participantContent}>
          <Icon style={styles.participantIcon} name="users" />
          <Text style={styles.participantText}>
            {" " + participant.length}{" "}
          </Text>
        </View>
      </View>
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
  participantContent: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    height: "90%"
  },
  participantIcon: {
    fontSize: 23
  },
  participantText: {
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default MyEventCard;
