import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MyEventDetail = ({ navigation }) => {
  const detail = navigation.getParam("detail", {});
  const participant = detail.participant || [];
  return (
    <View style={styles.container}>
      <ScrollView>
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
        <View style={styles.contentView}>
          <Text style={styles.title}>{detail.title}</Text>
          <Text style={styles.owner}> By: {detail.createBy}</Text>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.date}>{detail.date + ", " + detail.time}</Text>
          <Icon style={styles.location} name="location-arrow">
            <Text>
              {detail.place ? "  " + detail.place : "  No location added"}
            </Text>
          </Icon>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.information}>Information</Text>
          <Text style={styles.description}>{"\t" + detail.description}</Text>
        </View>
        <View style={styles.contentView}>
          <Icon style={styles.location} name="users">
            <Text>{"   " + participant.length}</Text>
          </Icon>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageView: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9db"
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain"
  },
  contentView: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9db",
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  title: {
    fontWeight: "700",
    fontSize: 30
  },
  owner: {
    color: "#a1a2a3",
    margin: 7,
    fontSize: 12
  },
  location: { fontSize: 16 },
  date: {
    fontSize: 18,
    color: "#b0b0b2",
    marginBottom: 5
  },
  information: {
    fontWeight: "bold"
  },
  description: {
    marginHorizontal: 5,
    color: "#b0b0b2"
  }
});

export default MyEventDetail;
