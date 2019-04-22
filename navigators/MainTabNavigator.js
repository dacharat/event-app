import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeTab from "../tabs/HomeTab";
import NotificationTab from "../tabs/NotificationTab";

import TabBarIcon from "../components/TabBarIcon";
import NewEvent from "../components/home/NewEvent";
import EventDetail from "../components/home/EventDetail";
import UserTab from "../tabs/UserTab";
import EditProfile from "../components/user/EditProfile";
import StarEvents from "../components/user/StarEvents";
import JoinEvents from "../components/user/JoinEvents";

const HomeStackTab = createStackNavigator({
  Home: HomeTab,
  NewEvent: NewEvent,
  Detail: EventDetail
});

HomeStackTab.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const NotificationStackTab = createStackNavigator({
  Noti: NotificationTab
});

NotificationStackTab.navigationOptions = {
  tabBarLabel: "Notification",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const UserStackTab = createStackNavigator({
  User: UserTab,
  EditProfile: EditProfile,
  StarEvents: StarEvents,
  JoinEvents: JoinEvents
});

UserStackTab.navigationOptions = {
  tabBarLabel: "User",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStackTab,
  NotificationStackTab,
  UserStackTab
});
