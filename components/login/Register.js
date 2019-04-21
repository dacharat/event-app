import React from "react";
import { View } from "react-native";

class Register extends React.Component {
  state = { password: "" };
  render() {
    return (
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={value => this.setState({ password: value })}
          value={this.state.password}
          secureTextEntry={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { margin: 10 },
  label: {
    fontSize: 23
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    height: 30,
    marginLeft: 25,
    marginRight: 25
  }
});

export default Register;
