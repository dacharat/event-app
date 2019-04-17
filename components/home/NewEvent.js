import React from "react";
import { ScrollView, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

import t from "tcomb-form-native";
import moment from "moment";

const Form = t.form.Form;

const Event = t.struct({
  title: t.String,
  description: t.String,
  date: t.Date,
  time: t.Date
});

const options = {
  fields: {
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
  handleSubmit = () => {
    const value = this._form.getValue();
    const data = {
      title: value.title,
      description: value.description,
      date: moment(value.date).format("DD MMM YY"),
      time: moment(value.time).format("HH:mm"),
      img: "http://i.imgur.com/UTmTK9i.png",
      category: "Test"
    };
    // console.log(value.date);
    // console.log(value.time);
    // console.log(moment(value.date).format("DD MMM YY"));
    // console.log(moment(value.time).format("HH:mm"));
    
    this.props.addEvent(data);
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Form type={Event} options={options} ref={c => (this._form = c)} />
        <Button title="Create New Event" onPress={this.handleSubmit} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    addEvent: data => {
      dispatch({ type: "NEW_EVENT", payload: data });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewEvent);
