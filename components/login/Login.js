import React from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import logo from "../../assets/app_logo.png";
import { connect } from "react-redux";
import { login } from "../../store/action/AuthAction";

class Login extends React.Component {
  state = {
    mail: "",
    password: ""
  };

  onLoginButtonClicked = () => {
    user = { email: this.state.mail, password: this.state.password };
    this.props.login(user);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text>E-mail</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={value => this.setState({ mail: value })}
          value={this.state.mail}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={value => this.setState({ password: value })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => this.onLoginButtonClicked()}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Regis")}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain"
  },
  inputText: {
    borderWidth: 0.5,
    width: "80%",
    height: 30,
    padding: 5
  }
});

const mapDispatchToProps = dispatch => {
  return { login: user => dispatch(login(user)) };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
