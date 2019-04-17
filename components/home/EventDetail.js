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
        <Text style={styles.description}>Create by: {detail.createBy}</Text>
        <Text>Date: {detail.date}</Text>
        <Text>Time: {detail.time}</Text>
        <Text style={styles.description}>{detail.description}</Text>
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
  description: {
    color: "#a1a2a3",
    margin: 10,
    marginTop: 0
  },
  time: { margin: 10, marginTop: 0 }
});

export default EventDetail;
