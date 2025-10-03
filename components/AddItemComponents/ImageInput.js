import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-web";
import { Pressable } from "react-native";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("برای بارگزاری تصاویر بایستی اجازه آن را به ما بدهید.");
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("حذف تصویر", "مطمئنی که میخوای تصویر را حذف کنی", [
        {
          text: "بله",
          onPress: () => {
            onChangeImage(null);
          },
        },
        { text: "خیر" },
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.assets);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <View style={styles.addImageButton}>
          {!imageUri && <FontAwesome name="image" size={26} color="#939192" />}
          {imageUri && <Image style={styles.image} source={imageUri} />}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  addImageButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 115,
    height: 115,
    backgroundColor: "#edededff",
    marginLeft: 13,
  },
});

export default ImageInput;
