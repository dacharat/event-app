import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import EventCard from "./EventCard";
import Filter from "./Filter";

import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

// const DEFAULT_FILTER = ["Sports", "Education", "Entertainment", "Activities"];

class EventList extends React.Component {
  state = {
    eventFilter: []
  };

  componentDidMount() {
    this.props.navigation.setParams({
      callback: this.callbackFilter,
      eventFilter: this.state.eventFilter
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.profile !== prevProps.profile) {
      this.setState({ eventFilter: this.props.profile.interest || [] });
    }
  }

  callbackFilter = filter => {
    this.setState({ eventFilter: filter });
  };

  filterWithRemoveJoinEvent = () => {
    const { navigation, firebaseEvents, profile } = this.props;

    const eventKeys = Object.keys(firebaseEvents);

    let filter = eventKeys.filter(key =>
      this.state.eventFilter.some(e => e === firebaseEvents[key].category)
    );

    profile.join &&
      profile.join.map(eventJoin => {
        filter = filter.filter(f => f !== eventJoin);
      });

    return filter.map((key, i) => (
      <EventCard
        key={i}
        navigation={navigation}
        eventID={key}
        detail={firebaseEvents[key]}
      />
    ));
  };

  render() {
    return (
      <>
        <Filter
          filter={this.state.eventFilter}
          callback={this.callbackFilter}
        />
        <ScrollView style={styles.contentContainer}>
          {this.props.firebaseEvents && this.filterWithRemoveJoinEvent()}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    backgroundColor: "#f7e5f2"
  }
});

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    firebaseEvents: state.firebase.data.events
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect(["events"])
)(EventList);
