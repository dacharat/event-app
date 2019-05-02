import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import logo from "../../assets/app_logo-removebg.png";
import MultiSelect from "react-native-multiple-select";
import { connect } from "react-redux";
import { register } from "../../store/action/AuthAction";
import bgImg from "../../assets/background.jpg";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";

const items = [
  { name: "Sports" },
  { name: "Education" },
  { name: "Entertainment" },
  { name: "Activities" }
];

class Register extends React.Component {
  state = {
    mail: "",
    password: "",
    username: "",
    selectedItems: []
  };

  onSubmit = () => {
    newUser = {
      email: this.state.mail,
      password: this.state.password,
      username: this.state.username,
      interest: this.state.selectedItems
    };
    this.props.createAccount(newUser);
    this.props.navigation.navigate("Login");
  };

  render() {
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
            <Fumi
              label={"Username"}
              iconClass={FontAwesomeIcon}
              iconName={"user"}
              iconColor={"#6002ee"}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              style={styles.inputText}
              onChangeText={text => {
                this.setState({ username: text });
              }}
            />
          </View>

          <View style={styles.category}>
            <MultiSelect
              items={items}
              onSelectedItemsChange={selectedItems =>
                this.setState({ selectedItems })
              }
              uniqueKey="name"
              selectedItems={this.state.selectedItems}
              selectText="Choose favourite category"
              searchInputPlaceholderText="Search Categories..."
              displayKey="name"
              submitButtonColor="#d602ee"
              submitButtonText="Enter"
              tagBorderColor="#fff"
              tagTextColor="#fff"
            />
          </View>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => this.onSubmit()}
          >
            <Text style={styles.regisButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  imgBackground: {
    height: "100%",
    width: "100%"
  },
  logo: {
    width: "100%",
    height: 120,
    resizeMode: "contain"
  },
  inputTextView: {
    width: "90%"
  },
  inputText: {
    marginVertical: 3,
    borderRadius: 15
  },
  category: {
    marginTop: 5,
    width: "90%",
    borderRadius: 20
  },
  registerButton: {
    width: "90%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#ee0290",
    marginVertical: 10
  },
  cancelButton: {
    width: "90%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderColor: "#cacdd1",
    borderWidth: 3
  },
  regisButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  cancelButtonText: {
    fontSize: 18,
    color: "#cacdd1",
    fontWeight: "bold"
  }
});

const mapDispatchToProps = dispatch => {
  return { createAccount: newUser => dispatch(register(newUser)) };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
