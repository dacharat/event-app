import React from 'react'
// import {View} from 'react-native'
import EventList from './EventLists';
import NewButton from './NewButton';

const Home = ({navigation}) => {
  return (
    <>
      <EventList navigation={navigation} />
      <NewButton navigation={navigation} />
    </>
  );
}

export default Home