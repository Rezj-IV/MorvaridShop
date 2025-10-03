import { hide } from "expo-splash-screen";
import React, { useState } from "react";
import { Alert, Button, Pressable } from "react-native";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { useFonts } from "expo-font";
function AddItemFields(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={{ marginTop: 30 }}>
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="drive-file-rename-outline"
            size={23}
            color="#D0CECE"
            style={styles.icon_tag}
          />
          <TextInput
            style={[styles.input, styles.name_input]}
            placeholderTextColor="#939192"
            placeholder="نام"
          />
        </View>
        <View style={styles.inputContainer}>
          <Foundation
            name="price-tag"
            size={23}
            color="#D0CECE"
            style={styles.icon_tag}
          />
          <TextInput
            style={[styles.input, styles.price_input]}
            placeholderTextColor="#939192"
            placeholder="قیمت"
          />
        </View>
        <Pressable
          style={[styles.input, styles.showCategoryModalBtn]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <MaterialIcons
            name="category"
            size={23}
            color="#D0CECE"
            style={styles.icon_tag}
          />
          <Text style={styles.showCategoryModal_Text}>دسته بندی</Text>
          <Entypo
            name="chevron-small-down"
            size={20}
            color="#D0CECE"
            style={styles.icon_down}
          />
        </Pressable>
        <Modal
          style={{ height: 700, width: "100%" }}
          animationType="slide"
          visible={modalVisible}
          transparent
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.categoryModalContainer}>
            <View style={styles.categoryModal}></View>
          </View>
        </Modal>
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.textRegister}>ثبت</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({


  input: {
    backgroundColor: "#edededff",
    height: 48,
    borderRadius: 25,
    marginBottom: 20,
    paddingLeft: 0,
    paddingTop: 10,
    paddingRight: 40,
    fontSize: 15,

    fontWeight: "bold",
  },
  price_input: {
    width: "44%",
    paddingRight: 32,
  },

  registerButton: {
    borderRadius: 27,
    backgroundColor: "#F75057",
    alignItems: "center",
    justifyContent: "center",
    height: 49,
  },
  textRegister: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  showCategoryModalBtn: {
    width: "44%",
    paddingTop: 10,
    paddingRight: 20,
    position: "relative",
  },
  showCategoryModal_Text: {
    color: "#939192",
    paddingRight: 22,
    fontSize: 15,
    fontWeight: "bold",
  },
  categoryModalContainer: {
    backgroundColor: "#00000057",
    flex: 1,
    justifyContent: "flex-end",
  },
  categoryModal: {
    height: "60%",
    backgroundColor: "white",
  },
  inputContainer: {
    position: "relative",
  },
  icon_tag: {
    position: "absolute",
    zIndex: 1,
    top: 10,
    right: 10,
  },
  icon_down: {
    position: "absolute",
    top: 13,
    left: 10,
  },
});

export default AddItemFields;
