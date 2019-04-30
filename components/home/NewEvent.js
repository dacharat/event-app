import React from "react";
import {
  ScrollView,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import { connect } from "react-redux";
import ModalSelector from "react-native-modal-selector";
import { createEvent } from "../../store/action/EventAction";
import t from "tcomb-form-native";
import moment from "moment";
import defaultImg from "../../assets/no_image.jpg";
import { ImagePicker, Permissions } from "expo";

const Form = t.form.Form;

const Event = t.struct({
  title: t.String,
  date: t.Date,
  time: t.Date,
  description: t.String
});

const options = {
  fields: {
    description: {
      multiline: true,
      stylesheet: {
        ...Form.stylesheet,
        textbox: {
          ...Form.stylesheet.textbox,
          normal: {
            ...Form.stylesheet.textbox.normal,
            height: 150
          },
          error: {
            ...Form.stylesheet.textbox.error,
            height: 150
          }
        }
      }
    },
    date: {
      label: "Date",
      mode: "date",
      config: {
        format: date => moment(date).format("DD-MMM-YYYY")
      }
    },
    time: {
      label: "Time",
      mode: "time",
      config: {
        format: date => moment(date).format("HH:mm")
      }
    }
  }
};

class NewEvent extends React.Component {
  state = {
    category: "Sports",
    imageURI: defaultImg
  };

  // componentDidUpdate(prevProps) {
  //   if (this.props.toast != prevProps.toast) {
  //   }
  // }

  handleSubmit = () => {
    // const value = this._form.getValue();
    // const data = {
    //   title: value.title,
    //   description: value.description,
    //   date: moment(value.date).format("DD MMM YY"),
    //   time: moment(value.time).format("HH:mm"),
    //   img: this.state.imageURI,
    //   category: this.state.category
    // };

    const data = {
      title: "value.title",
      description: "value.description",
      date: "000000",
      time: "0000",
      img: this.state.imageURI,
      category: this.state.category
    };

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
        this.setState({ imageURI: result });
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
        {/* <Form type={Event} options={options} ref={c => (this._form = c)} /> */}

        <View style={styles.imageUpload}>
          <Image source={this.state.imageURI} style={styles.image} />
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
        <Button title="Create New Event" onPress={this.handleSubmit} />
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
