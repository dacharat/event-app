import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import DecisionButton from "./DecisionButton";

const EventDetail = ({ navigation }) => {
  const detail = navigation.getParam("detail", {});
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={
            detail.img
              ? { uri: detail.img }
              : require("../../assets/no_image.jpg")
          }
        />
        <Text style={styles.title}>{detail.title}</Text>
        <Text style={styles.owner}>Create by: {detail.createBy}</Text>
        <View style={styles.datetime}>
          <Text style={styles.date}>Date: {detail.date}</Text>
          <Text style={styles.date}>Time: {detail.time}</Text>
        </View>
        <View>
          <Text style={styles.description}>{"\t" + detail.description}</Text>
        </View>
      </ScrollView>
      <DecisionButton detail={detail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain"
  },
  title: {
    fontSize: 30,
    margin: 7
  },
  owner: {
    color: "#a1a2a3",
    margin: 10,
    marginTop: 0
  },
  date: { fontSize: 20 },
  datetime: {
    borderRadius: 7,
    borderColor: "red",
    borderWidth: 0.5,
    marginRight: 10,
    marginLeft: 10,
    padding: 7
  },
  description: {
    margin: 10,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 0.5,
  }
});

export default EventDetail;
