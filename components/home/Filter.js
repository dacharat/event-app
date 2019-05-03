import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";

import MultiSelect from "react-native-multiple-select";

const items = [
  { name: "Sports" },
  { name: "Education" },
  { name: "Entertainment" },
  { name: "Activities" }
];

class Filter extends React.Component {
  state = {
    modalVisible: false,
    selectedItems: this.props.filter
  };

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.setState({ selectedItems: this.props.filter });
    }
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  filterEvent = () => {
    this.setState({ modalVisible: !this.state.modalVisible });

    this.props.callback(this.state.selectedItems);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.modalButton} onPress={this.toggleModal}>
          <Text style={styles.buttonText}>Click here to filter</Text>
        </TouchableOpacity>
        <Modal style={styles.modal} isVisible={this.state.modalVisible}>
          <View style={styles.modalMessageView}>
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
          <View style={styles.actionButtonView}>
            <TouchableOpacity style={styles.button} onPress={this.toggleModal}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.filterEvent}>
              <Text>Filter</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  modalButton: {
    width: "100%",
    height: 35,
    borderRadius: 3,
    backgroundColor: "#e196ff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "800"
  },
  modal: {
    margin: 40,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 30
  },
  modalMessageView: {
    flex: 1,
    marginTop: 20,
    margin: 10
  },
  actionButtonView: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    flexDirection: "row",
    height: 50,
    width: "100%"
  },
  button: {
    height: "100%",
    width: "50%",
    backgroundColor: "#42f46e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15
  }
});

export default Filter;
