import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  View
} from "react-native";
import { connect } from "react-redux";
import ModalSelector from "react-native-modal-selector";
import { createEvent } from "../../store/action/EventAction";
import defaultImg from "../../assets/no_image.jpg";
import { ImagePicker, Permissions } from "expo";
import DatePicker from "react-native-datepicker";
import moment from "moment";

class NewEvent extends React.Component {
  state = {
    title: "",
    description: "",
    date: "",
    time: "",
    category: "Sports",
    img: defaultImg
  };

  handleSubmit = () => {
    const data = this.state;
    this.props.createEvent(data);
    this.props.navigation.navigate("Home");
  };

  onSelectImageClicked = async () => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);

    console.log(`[ pickFromCamera ] ${permissions} access: ${status}`);
    if (status !== "granted") {
      Sentry.captureException(
        new Error(`[ pickFromCamera ] ${permissions} access: ${status}`)
      );
    } else {
      let result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        this.setState({ img: result });
      }
    }
  };

  render() {
    const data = [
      { key: 0, label: "Sports" },
      { key: 1, label: "Education" },
      { key: 2, label: "Entertainment" },
      { key: 3, label: "Activities" }
    ];
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inlineForm}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={value => this.setState({ title: value })}
            value={this.state.title}
          />
        </View>

        <Text>Description</Text>
        <TextInput
          multiline
          style={styles.textArea}
          onChangeText={value => this.setState({ description: value })}
          value={this.state.description}
        />

        <DatePicker
          style={styles.datePicker}
          date={this.state.date}
          mode="date"
          format="YYYY-MM-DD"
          minDate={moment().format("YYYY-MM-DD")}
          maxDate="2116-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />

        <DatePicker
          style={styles.datePicker}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={time => {
            this.setState({ time: time });
          }}
        />

        <View style={styles.imageUpload}>
          <Image source={this.state.img} style={styles.image} />
          <TouchableOpacity
            style={styles.chooseImgButton}
            onPress={() => this.onSelectImageClicked()}
          >
            <Text>Select Image</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.category}>Category</Text>
        <ModalSelector
          data={data}
          initValue={this.state.category}
          onChange={option => this.setState({ category: option.label })}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.handleSubmit}
        >
          <Text style={styles.submitButtonText}>Create New Event</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 18,
    backgroundColor: "#ffffff"
  },
  category: { fontWeight: "500", fontSize: 18 },
  chooseImgButton: {
    width: "100%",
    borderWidth: 0.5,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  imageUpload: {
    justifyContent: "center",
    alignItems: "center"
  },
  submitButton: {
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#6dfcff"
  },
  submitButtonText: {
    fontWeight: "bold",
    fontSize: 20
  },
  inputText: {
    borderWidth: 0.5,
    width: "100%",
    height: 30,
    padding: 5,
    borderRadius: 10,
    flex: 0.8
  },
  textArea: {
    borderWidth: 0.5,
    width: "100%",
    height: 100,
    padding: 5,
    borderRadius: 10
  },
  inlineForm: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  datePicker: {
    width: "100%",
    margin: 5
  },
  label: {
    flex: 0.2
  }
});

const mapStateToProps = state => {
  return { firebase: state.firebase };
};
const mapDispatchToProps = dispatch => {
  return {
    createEvent: data => {
      dispatch(createEvent(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEvent);
