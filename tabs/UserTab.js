import React from "react";
import { View, StyleSheet, Text } from "react-native";
import User from "../components/user/User";

class UserTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <User navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

export default UserTab;
