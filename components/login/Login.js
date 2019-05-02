import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import logo from "../../assets/app_logo-removebg.png";
import { connect } from "react-redux";
import { login } from "../../store/action/AuthAction";
import bgImg from "../../assets/background.jpg";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";

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
      <ImageBackground source={bgImg} style={styles.imgBackground}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={styles.container}
        >
          <Image source={logo} style={styles.logo} />
          <View style={styles.inputTextView}>
            <Fumi
              label={"Email"}
              iconClass={FontAwesomeIcon}
              iconName={"at"}
              iconColor={"#6002ee"}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              style={styles.inputText}
              onChangeText={text => {
                this.setState({ mail: text });
              }}
            />
            <Fumi
              label={"Password"}
              iconClass={FontAwesomeIcon}
              iconName={"lock"}
              iconColor={"#6002ee"}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              style={styles.inputText}
              onChangeText={text => {
                this.setState({ password: text });
              }}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.onLoginButtonClicked()}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate("Regis")}
            >
              <Text style={styles.registerText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
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
    width: "100%",
    height: 150,
    resizeMode: "contain"
  },
  imgBackground: {
    height: "100%",
    width: "100%"
  },
  form: {
    width: "100%",
    height: 200,
    padding: 20
  },
  inputTextView: {
    width: "90%"
  },
  inputText: {
    marginVertical: 3,
    borderRadius: 15
  },
  button: {
    width: "90%"
  },
  loginButton: {
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#ee0290",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  registerButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  registerText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold"
  }
});

const mapDispatchToProps = dispatch => {
  return { login: user => dispatch(login(user)) };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
