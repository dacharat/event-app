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

const HomeStackTab = createStackNavigator({
  Home: HomeTab,
  NewEvent: NewEvent
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

export default createBottomTabNavigator({
  HomeStackTab,
  NotificationStackTab
});
