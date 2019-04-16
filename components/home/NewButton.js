import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

const NewButton = ({ navigation }) => {
  return (
    <View style={styles.circle}>
      <Button
        style={styles.text}
        title="+"
        onPress={() => navigation.navigate("NewEvent")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 15,
    bottom: 15,
    borderRadius: 100,
    backgroundColor: 'lightblue'
  },
  text: {
    fontSize: 30
  }
});

export default NewButton