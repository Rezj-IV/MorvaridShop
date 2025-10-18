import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, Modal, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useFormikContext } from "formik";

function CategoryModal({ name }) {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const [modalVisible, setModalVisible] = useState(false);

  const clickHandle = (category) => {
    setFieldValue(name, category);
    setModalVisible(false)
  };

  const data = [
    {
      title: "لوازم خانگی",
      image: "https://img.icons8.com/?size=80&id=eSosDmiZWEAZ&format=png",
    },
    {
      title: "کالای دیجیتال",
      image: "https://img.icons8.com/?size=80&id=dcP07MTsJKm9&format=png",
    },
    {
      title: "پوشاک",
      image: "https://img.icons8.com/?size=80&id=dgJJKjbsKTEh&format=png",
    },
    {
      title: "کتاب",
      image: "https://img.icons8.com/?size=80&id=wNZ3FTgUzSQX&format=png",
    },
    {
      title: "بازی", 
      image: "https://img.icons8.com/?size=80&id=FXnAIiRTRfon&format=png",
    },
    {
      title: "سایر",
      image: "https://img.icons8.com/?size=80&id=e40ERdqR9nQr&format=png",
    },
  ];
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.showCategoryModalBtn}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <MaterialIcons
          name="category"
          size={23}
          color="#D0CECE"
          style={styles.icon_tag}
        />
        {values[name] ? (
          <Text style={[styles.showCategoryModal_Text , {color:"#575757ff"}]}>{values[name]}</Text>
        ) : (
          <Text style={styles.showCategoryModal_Text}>دسته بندی</Text>
        )}
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
          <View style={styles.categoryModalChild}>
            <Text style={styles.header}>یک دسته را انتخاب کنید</Text>
            <View style={styles.categoryModal}>
              {data.map((item, index) => {
                return (
                  <Pressable
                    onPress={() => clickHandle(item.title)}
                    style={styles.categoryContainer}
                    key={index}
                  >
                    <View style={styles.category}>
                      <Image
                        style={styles.categoryImage}
                        source={{
                          uri: item.image,
                        }}
                      />
                    </View>
                    <Text style={styles.categoryText}>{item.title}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
      </Modal>
      {errors[name] && touched[name] && <Text style={styles.errorMessage}>{errors[name]}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({

  showCategoryModalBtn: {
    flexDirection: "row",
    width: "44%",
    paddingTop: 10,
    paddingRight: 20,
    position: "relative",
    backgroundColor: "#edededff",
    height: 48,
    borderRadius: 25,
    fontSize: 15,
    fontWeight: "bold",
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
  categoryModalChild: {
    height: "60%",
    backgroundColor: "#ffffffff",
    borderRadius: 20,
  },
  categoryModal: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    justifyContent: "center",
    marginTop: 25,
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
  categoryContainer: {
    width: 120,
    height: 120,
    alignItems: "center",
  },
  category: {
    width: 75,
    height: 75,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",

    elevation: 5,
    shadowColor: "#a2a2a2d8",
  },
  categoryImage: { width: "65%", height: "65%" },
  categoryText: { textAlign: "center", fontSize: 13, paddingTop: 5 },
  header: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "600",
    paddingTop: 15,
  },
  errorMessage:{
   color: "red",
    paddingTop: 5,
    paddingRight: 8,
  }
});

export default CategoryModal;
