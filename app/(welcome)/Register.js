import React from "react";
import { View, StyleSheet, Image } from "react-native";

function Register(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/blueImage2.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Register;
