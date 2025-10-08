import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import { mainColor } from "../../components/ui/Color";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
function welcomePage(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        source={require("../../assets/images/blueImage2.jpg")}
      />

      <View>
        <ImageBackground
          style={styles.first}
          source={require("../../assets/images/waves2.png")}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>خوش آمدی</Text>
            <Text style={styles.aboutUs}>
              در اینجا میتوانید انواع مختلفی از کالا های خود را به فروش بگذارید .
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.second}>
          <View style={styles.linkContainer}>
            <Link href="/Login" style={[styles.link]}>
              <View style={[styles.childLink , {flexDirection:"row"}]}>
                <SimpleLineIcons name="login" size={24} color="#558bc4ff" />

                <Text style={[styles.linkText, { color: mainColor }]}>
              ورود
                </Text>
              </View>
            </Link>
            <Link href="/Register" style={[, styles.link]}>
            <ImageBackground style={styles.register} source={require("../../assets/images/blueImage2.jpg")}>
              <View style={styles.childLink}>
                <Text style={styles.linkText}>ثبت نام</Text>
              </View>
            </ImageBackground>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  first: {
    width: "100%",
    height: 255,
  },
  second: {
    width: "100%",
    height: 230,
    backgroundColor: "#FAFBFD",
  },

  container: {
    flex: 1,
    direction: "rtl",

    justifyContent: "flex-end",
  },
  linkContainer: {
    flexDirection: "row",
    width: "100%",
    bottom: 0,
    position: "absolute",
    justifyContent: "space-between",
  },
  mainImage: {
    position: "absolute",
    zIndex: -1,
  },

  titleContainer: {
    height: "100%",
    justifyContent: "flex-end",
    position: "absolute",
    paddingRight: 8,
  },
  title: { fontSize: 28.5, color: "#4580d8ff"},

  aboutUs: { fontSize: 14, fontWeight: "600", color: "#1c488afe" ,paddingLeft:50 , fontStyle:"italic"},

  link: {
    width: "45%",
  },
 
  register: {
    borderTopStartRadius:40,
    overflow:"hidden",
    width:"100%"
  },

  childLink: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height:65,
  },
  linkText: { color: "#c3d8ffff", fontWeight: "600", fontSize: 16, 

  },
});

export default welcomePage;
