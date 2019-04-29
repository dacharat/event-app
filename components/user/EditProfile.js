import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import MultiSelect from "react-native-multiple-select";
import { connect } from "react-redux";
import { updateInterest } from "../../store/action/AuthAction";

const items = [
  { name: "Sports" },
  { name: "Education" },
  { name: "Entertainment" },
  { name: "Activities" }
];

class EditProfile extends React.Component {
  state = {
    selectedItems: this.props.profile.interest
  };
  render() {
    const { update } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Change Interested Event</Text>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => update(this.state.selectedItems)}
        >
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { margin: 10 },
  label: {
    fontSize: 23
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#42f47d"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700"
  }
});

const mapStateToProps = state => {
  return { auth: state.firebase.auth, profile: state.firebase.profile };
};

const mapDispatchToProps = dispatch => {
  return {
    update: interest => dispatch(updateInterest(interest))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
