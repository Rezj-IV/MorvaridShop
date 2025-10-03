import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet, StatusBar, Text, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
export default function AccountContent() {
  const DATA = [
    {
      id: 1,
      link: "myListings",
      image: "https://img.icons8.com/?size=48&id=80613&format=png",
      name: "لیست کالا های من",
    },
    {
      id: 2,
      link: "myMessages",
      image: "https://img.icons8.com/?size=48&id=80317&format=png",
      name: "پیام های من",
    },
  ];

  return (
    <>
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/?size=80&id=65342&format=png",
          }}
          style={styles.userImage}
        />

        <View>
          <Text style={styles.username}>Mosh</Text>
          <Text style={styles.email}>rezj.iv@gmail.com</Text>
        </View>
      </View>
      {DATA.map((item) => {
        return (
          <Link href={`/${item.link}`} key={item.id}>
            <View style={styles.list_message_container}>
              <View style={styles.content}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.text}> {item.name}</Text>
              </View>
              <View style={styles.content}>
                <Entypo name="chevron-right" size={20} color="gray" />
              </View>
            </View>
          </Link>
        );
      })}
      <View style={[styles.list_message_container, styles.logoutContainer]}>
        <View style={styles.content}>
          <Image
            source={{
              uri: "https://img.icons8.com/?size=40&id=64780&format=png",
            }}
            style={styles.image}
          />
          <Text style={styles.text}> خروج از حساب</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  userContainer: {
    flexDirection: "row",
    width: "100%",
    height: "auto",
    backgroundColor: "#fefefeff",
    marginBottom: 40,
    padding: 15,
  },
  userImage: {
    width: 73,
    height: 73,
    marginRight: 10,
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
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },

  logoutContainer: {
    marginTop: 40,
    borderWidth: 0,
  },
});
