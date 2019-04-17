import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";

const EventCard = ({ detail, navigation }) => {
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
          <CustomButton title="⭐️" />
          <CustomButton title="+" />
          {/* <Button title="⭐️" onPress={() => {}} />
          <Button title="+" onPress={() => {}} /> */}
        </View>
      </View>
      <Text style={styles.description}>
        {detail.description.substring(0, 50)}
      </Text>
      <Text style={styles.time}>{detail.date + " " + detail.time}</Text>
    </TouchableOpacity>
  );
};

const CustomButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.buttonInline} onPress={() => {}}>
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

export default EventCard;
