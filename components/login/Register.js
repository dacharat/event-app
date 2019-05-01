import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import logo from "../../assets/app_logo-removebg.png";
import MultiSelect from "react-native-multiple-select";
import { connect } from "react-redux";
import { register } from "../../store/action/AuthAction";

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
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={value => this.setState({ mail: value })}
          value={this.state.mail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={value => this.setState({ password: value })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={value => this.setState({ username: value })}
          value={this.state.username}
        />
        <Text style={styles.label}>Category</Text>
        <View style={styles.category}>
          <MultiSelect
            items={items}
            onSelectedItemsChange={selectedItems =>
              this.setState({ selectedItems })
            }
            uniqueKey="name"
            selectedItems={this.state.selectedItems}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            displayKey="name"
            submitButtonText="Enter"
          />
        </View>
        <View style={styles.inline}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.register}
            onPress={() => this.onSubmit()}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10
  },
  logo: {
    width: "100%",
    height: 120,
    resizeMode: "contain"
  },
  label: {
    fontSize: 18
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 10,
    marginHorizontal: 10
  },
  category: {
    margin: 10
  },
  register: {
    marginHorizontal: 2,
    flex: 0.7,
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 33,
    backgroundColor: "#90ee02"
  },
  cancelButton: {
    marginHorizontal: 2,
    flex: 0.3,
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 33,
    backgroundColor: "#ee0290"
  },
  inline: {
    width: "100%",
    flexDirection: "row"
  }
});

const mapDispatchToProps = dispatch => {
  return { createAccount: newUser => dispatch(register(newUser)) };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
