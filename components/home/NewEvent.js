import React from "react";
import { ScrollView, Button, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import ModalSelector from "react-native-modal-selector";
import { createEvent } from "../../store/action/EventAction";
import t from "tcomb-form-native";
import moment from "moment";

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
    category: "Sports"
  };

  componentDidUpdate(prevProps) {
    if(this.props.toast != prevProps.toast) {
      
    }
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    const data = {
      title: value.title,
      description: value.description,
      date: moment(value.date).format("DD MMM YY"),
      time: moment(value.time).format("HH:mm"),
      img: "http://i.imgur.com/UTmTK9i.png",
      category: this.state.category
    };

    this.props.createEvent(data)
    this.props.navigation.navigate("Home");
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
        <Form type={Event} options={options} ref={c => (this._form = c)} />
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
  category: { fontWeight: "500", fontSize: 18 }
});

const mapStateToProps = state => {
  return {toast: state.event.createToast}
}
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
