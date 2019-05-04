import React from "react";
import Oncoming from "../components/oncoming/Oncoming";

class OncomingTab extends React.Component {
  render() {
    return <Oncoming navigation={this.props.navigation} />;
  }
}

export default OncomingTab;
