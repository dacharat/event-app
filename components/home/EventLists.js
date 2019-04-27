import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import EventCard from "./EventCard";
import Filter from "./Filter";

import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

// const DEFAULT_FILTER = ["Sports", "Education", "Entertainment", "Activities"];

class EventList extends React.Component {
  state = {
    eventFilter: this.props.auth.interest
  };

  componentDidUpdate(prevProps) {
    if (this.props.auth !== prevProps.auth) {
      this.setState({ eventFilter: this.props.auth.interest });
    }
  }

  callbackFilter = filter => {
    this.setState({ eventFilter: filter });
  };

  filterWithRemoveJoinEvent = () => {
    const { events, navigation, auth, firebaseEvents } = this.props;

    const eventKeys = Object.keys(firebaseEvents);

    let filter = eventKeys.filter(key =>
      this.state.eventFilter.some(e => e === firebaseEvents[key].category)
    );

    auth.join.map(eventJoin => {
      filter = filter.filter(f => f.title !== eventJoin);
    });

    console.log(filter);
    
    return filter.map((key, i) => (
      <EventCard key={i} navigation={navigation} detail={firebaseEvents[key]} />
    ));

    // let filter = events.filter(event =>
    //   this.state.eventFilter.some(e => e === event.category)
    // );

    // auth.join.map(eventJoin => {
    //   filter = filter.filter(f => f.title !== eventJoin);
    // });

    // return filter.map((event, i) => (
    //   <EventCard key={i} navigation={navigation} detail={event} />
    // ));
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
    paddingVertical: 5
  }
});

const mapStateToProps = state => {
  return {
    events: state.events,
    auth: state.auth,
    firebaseEvents: state.firebase.data.events
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect(["events"])
)(EventList);
