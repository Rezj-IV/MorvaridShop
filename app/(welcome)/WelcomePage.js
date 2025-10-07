import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { mainColor } from "../../components/ui/Color";
function welcomePage(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/blueImage2.jpg")} />
      <View style={styles.linkContainer}>
        <Link href="/Login" style={[styles.login, styles.link]}>
          <View style={styles.childLink}>
            <Text style={[styles.linkText , {color:"#e8e9ffff"}]}>Sign in</Text>
          </View>
        </Link>
        <Link href="/Register" style={[styles.register, styles.link]}>
          <View style={styles.childLink}>
            <Text style={styles.linkText}>Sign Up</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  linkContainer: {
    flexDirection: "row",
    width: "100%",
    bottom: 0,
    position: "absolute",
    justifyContent: "space-between",
    zIndex: 1,
  },
  link: {
    width: "45%",
  },
  login: {},
  register: {
    backgroundColor: "rgba(243, 245, 255, 1)",
    borderTopLeftRadius: 40,
  },

  childLink: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 70,
  },
  linkText: { color: mainColor, fontWeight: "600", fontSize: 15.5 },
});

export default welcomePage;
