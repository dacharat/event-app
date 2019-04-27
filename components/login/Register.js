import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
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
        <TouchableOpacity
          style={styles.register}
          onPress={() => this.onSubmit()}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { margin: 10 },
  label: {
    fontSize: 18
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    height: 30,
    marginLeft: 25,
    marginRight: 25
  },
  category: {
    margin: 20
  },
  register: {
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 27
  }
});

const mapDispatchToProps = dispatch => {
  return { createAccount: newUser => dispatch(register(newUser)) };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
