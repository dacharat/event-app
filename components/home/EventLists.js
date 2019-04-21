import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import EventCard from "./EventCard";

import { connect } from "react-redux";
import Filter from "./Filter";

// const DEFAULT_FILTER = ["Sports", "Education", "Entertainment", "Activities"];

class EventList extends React.Component {
  state = {
    eventFilter: this.props.auth.interest
  };

  componentDidUpdate(prevProps) {
    if (this.props.auth.interest !== prevProps.auth.interest) {
      this.setState({ eventFilter: this.props.auth.interest });
    }
  }

  callbackFilter = filter => {
    this.setState({ eventFilter: filter });
  };

  filterWithRemoveJoinEvent = () => {
    const { events, navigation, auth } = this.props;
    let filter = events.filter(event =>
      this.state.eventFilter.some(e => e === event.category)
    );

    auth.join.map(eventJoin => {
      filter = filter.filter(f => f.title !== eventJoin);
    });

    return filter.map((event, i) => (
      <EventCard key={i} navigation={navigation} detail={event} />
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
          {this.filterWithRemoveJoinEvent()}
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
  return { events: state.events, auth: state.auth };
};

export default connect(mapStateToProps)(EventList);
