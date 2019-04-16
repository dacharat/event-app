import React from 'react'
import {View, StyleSheet} from 'react-native'
import Home from '../components/home/Home';

class HomeTab extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Home navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeTab