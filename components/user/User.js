import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { logout } from "../../store/action/AuthAction";
import Icon from "react-native-vector-icons/FontAwesome";

const User = ({ navigation, auth, profile, logout }) => {
  return (
    <>
      <View style={styles.profile}>
        <Image
          style={styles.profileImg}
          source={
            auth.imageUrl
              ? auth.imageUrl
              : require("../../assets/no-profile-img.png")
          }
        />
        <Text style={styles.profileName}>{profile.username}</Text>
      </View>
      <ScrollView style={styles.scollView}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.editProfile}
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.editProfile}
          onPress={() => {
            navigation.navigate("MyEvents");
          }}
        >
          <Text style={styles.buttonText}>My Event</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.editProfile}
          onPress={() => {
            navigation.navigate("StarEvents");
          }}
        >
          <Text style={styles.buttonText}>Star Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.logout}
          onPress={() => logout()}
        >
          <Icon style={styles.logoutText} name="power-off" />
          <Text style={styles.logoutText}>{"  "}Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomColor: "#cecece",
    borderBottomWidth: 1,
    backgroundColor: "#c33bab"
  },
  scollView: {
    height: "70%"
  },
  profileImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 50 / 2
  },
  profileName: {
    marginLeft: 30,
    marginRight: 30,
    fontWeight: "500",
    fontSize: 24,
    color: "white"
  },
  editProfile: {
    borderBottomColor: "#cecece",
    borderBottomWidth: 1,
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 15
  },
  logout: {
    backgroundColor: "#ff5e5e",
    margin: 10,
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  logoutText: {
    color: "white",
    fontSize: 20,
    fontWeight: "900"
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return { auth: state.firebase.auth, profile: state.firebase.profile };
};
const mapDispatchToProps = dispatch => {
  return { logout: () => dispatch(logout()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
