import { Link, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
export default function AccountContent() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: 1,
      link: "myListings",
      image: "https://img.icons8.com/?size=48&id=80613&format=png",
      name: "لیست کالا های من",
    },
    // {
    //   id: 2,
    //   link: "myMessages",
    //   image: "https://img.icons8.com/?size=48&id=80317&format=png",
    //   name: "پیام های من",
    // },
  ];
  const LogOut = () => {
    Alert.alert("خروج از حساب", "آیا مطمئنی که میخوای از حساب خارج شوید.", [
      {
        text: "بله",
        onPress: () => {
          AsyncStorage.removeItem("jwtToken");
          navigation.navigate("(welcome)");
        },
      },
      { text: "خیر" },
    ]);
  };
  
  const [jwtData, setJwtData] = useState();

  const getToken = async () => {
    const jwt = await AsyncStorage.getItem("jwtToken");
    if (jwt) {
      setJwtData({
        seller: jwtDecode(jwt).username,
        email: jwtDecode(jwt).email,
      });
    }
    console.log("jwt", jwtData);
  };
  useEffect(() => {
    getToken();
  }, []);
  // console.log("jwt+> ", jwtData.seller);
  // console.log("jwt=> ", JSON.stringify(jwtData));
  return (
    <>
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.freepik.com/256/12808/12808894.png?semt=ais_white_label",
          }}
          style={styles.userImage}
        />
        {jwtData && (
          <View style={styles.userInfo}>
            <Text style={styles.username}>{jwtData.seller}</Text>
            <Text style={styles.email}>{jwtData.email}</Text>
          </View>
        )}
      </View>
      {jwtData && (
        <>
          {DATA.map((item) => {
            return (
              <Link
                href={`/${item.link}?seller=${jwtData.seller}`}
                key={item.id}
              >
                <View style={styles.list_message_container}>
                  <View style={styles.content}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.text}> {item.name}</Text>
                  </View>
                  <View style={styles.content}>
                    <Entypo name="chevron-left" size={20} color="gray" />
                  </View>
                </View>
              </Link>
            );
          })}
        </>
      )}
      <TouchableOpacity
        onPress={LogOut}
        style={[styles.list_message_container, styles.logoutContainer]}
      >
        <View style={styles.content}>
          <Image
            source={{
              uri: "https://img.icons8.com/?size=40&id=64780&format=png",
            }}
            style={styles.image}
          />
          <Text style={styles.text}> خروج از حساب</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    width: "100%",
    height: "13%",
    backgroundColor: "#fefefeff",
    marginBottom: 40,
    padding: 15,
  },
  userImage: {
    width: 73,
    height: 73,
    marginLeft: 10,
  },
  userInfo:{
    height:"100%",
    justifyContent:"center"
  },
  username: {
    fontSize: 17,
  },
  email: {
    fontSize: 16,
    fontWeight: "600",
    color: "#9a9ba2ff",
  },
  list_message_container: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "#fefefeff",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: "#e6e6e6ff",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
  
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal:10
  },

  logoutContainer: {
    marginTop: 40,
    borderWidth: 0,
  },
});
