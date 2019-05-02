import React from "react";
import { Platform, Image } from "react-native";
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

const options = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#ee0290"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerBackTitle: "Back",
    headerTitle: (
      <Image
        style={{
          width: 70,
          height: 70,
          resizeMode: "contain",
          marginHorizontal: 7
        }}
        source={require("../assets/app_logo-removebg.png")}
      />
    )
  }
};

const HomeStackTab = createStackNavigator(
  {
    Home: HomeTab,
    NewEvent: NewEvent,
    Detail: EventDetail
  },
  options
);

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

const NotificationStackTab = createStackNavigator(
  {
    Noti: NotificationTab
  },
  options
);

NotificationStackTab.navigationOptions = {
  tabBarLabel: "Notification",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const UserStackTab = createStackNavigator(
  {
    User: UserTab,
    EditProfile: EditProfile,
    StarEvents: StarEvents,
    JoinEvents: JoinEvents
  },
  options
);

UserStackTab.navigationOptions = {
  tabBarLabel: "User",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator(
  {
    HomeStackTab,
    NotificationStackTab,
    UserStackTab
  },
  {
    tabBarOptions: {
      style: {
        height: 60,
        backgroundColor: "#ee0290"
      },
      activeTintColor: "white",
      labelStyle: {
        fontSize: 15,
        margin: 0,
        padding: 0,
        fontWeight: "bold"
      }
    }
  }
);
