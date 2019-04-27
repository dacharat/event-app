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

const User = ({ navigation, auth, profile, logout }) => {
  console.log(auth);
  console.log(profile);

  return (
    <View>
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
      <ScrollView>
        <TouchableOpacity
          style={styles.editProfile}
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editProfile}
          onPress={() => {
            navigation.navigate("StarEvents");
          }}
        >
          <Text>Star Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editProfile}
          onPress={() => {
            navigation.navigate("JoinEvents");
          }}
        >
          <Text>My Event</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            logout();
          }}
        >
          <Text>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%" },
  profile: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 0.167
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
    fontWeight: "300",
    fontSize: 24
  },
  editProfile: {
    borderBottomColor: "black",
    borderBottomWidth: 0.167,
    height: 75,
    alignItems: "center",
    justifyContent: "center"
  },
  logout: {
    backgroundColor: "red",
    borderBottomColor: "black",
    borderBottomWidth: 0.167,
    height: 75,
    alignItems: "center",
    justifyContent: "center"
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
