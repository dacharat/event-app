import React from "react";
import ToastLib from "react-native-easy-toast";
import { StyleSheet } from "react-native";

class Toast extends React.Component {
  show = message => {
    console.log("showed");

    this.refs.toast.show(message);
  };
  render() {
    return (
      <ToastLib
        ref="toast"
        style={styles.toast}
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.9}
        textStyle={styles.toastText}
      />
    );
  }
}

const styles = StyleSheet.create({
  toast: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15
  },
  toastText: {
    color: "black",
    fontWeight: "500"
  }
});

export default Toast;
