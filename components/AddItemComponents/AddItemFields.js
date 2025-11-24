import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import { mainColor } from "../ui/Color";
import FormImagesPicker from "./FormImagesPicker";
import CategoryModal from "./CategoryModal";
import Lottie from "../HomeComponents/Lottie";
import { useNavigation } from "expo-router";
import { Image } from "expo-image";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
function AddItemFields(props) {
  const [showAnimation, setshowAnimation] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const navigation = useNavigation();
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  // const [seller, setSeller] = useState();

  // const getToken = async () => {
  //   const jwt = await AsyncStorage.getItem("jwtToken");
  //   if (jwt) {
  //     setSeller(jwtDecode(jwt).username);
  //   }
  // };
  // useEffect(() => {
  //   getToken();
  // }, [seller]);

  // console.log("seller77", seller);

  const onSubmit = async (values) => {
    console.log("values", values);
    const jwt = await AsyncStorage.getItem("jwtToken");
    console.log("username",jwtDecode(jwt).username);
    const requestBody = new FormData();
    const image = values.images[0][0];

    requestBody.append("name", values.name);
    requestBody.append("price", values.price);
    requestBody.append("category", values.category);

    requestBody.append("seller", jwtDecode(jwt).username);

    requestBody.append("image", {
      uri: image.uri,
      type: image.mimeType || "image/jpeg",
      name: image.fileName || "photo.jpg",
    });

    try {
      setshowAnimation(true);
      setTimeout(() => {
        setshowAnimation(false);
        navigation.navigate("(home)");
      }, 3650);
      console.log("try....");
      const response = await fetch("https://rjland.ir/api/MorvaridShop", {
        method: "post",
        body: requestBody,
      });
      const result = await response.json();
      console.log("result", result);
      showToast(" کالا شما با موفقیت ثبت شد");
    } catch (error) {
      console.log("errorXX", error);
      showToast("سرور در حال حاضر در دسترس نمی باشد");
    }
  };

  const initialValues = {
    name: "",
    price: "",
    images: [],
    category: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "باید حداقل شامل شش کارکتر باشد")
      .required("نام کالا را وارد کنید"),
    price: Yup.string()
      .min(4, "باید حداقل شامل چهار رقم باشد")
      .required("قیمت کالا را وارد کنید"),
    images: Yup.array().min(1, "باید حداقل یک تصویر را آپلود کنید"),
    category: Yup.string().required("لطفا یکی از دسته ها را انتخاب کنید"),
  });
  return (
    <View>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          touched,
          errors,
          isValid,
          handleChange,
          handleSubmit,
          setFieldTouched,
          setFieldValue,
        }) => (
          <View style={{ gap: 20 }}>
            <FormImagesPicker name="images" />

            <View style={[styles.inputContainer]}>
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
                value={values.name}
                onBlur={() => setFieldTouched("name")}
                onChangeText={handleChange("name")}
              />
              {errors.name && touched.name && (
                <Text style={styles.errorMessage}>{errors.name}</Text>
              )}
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
                keyboardType="number-pad"
                value={values.price}
                onBlur={() => setFieldTouched("price")}
                onChangeText={handleChange("price")}
              />
              {touched.price && errors.price && (
                <Text style={styles.errorMessage}>{errors.price}</Text>
              )}
            </View>
            {/* categoryModal ro import kon dar inja <CategoryModal name="category"/> */}
            <CategoryModal name="category" />
            <TouchableOpacity
              onPress={handleSubmit}
              style={[
                styles.registerButton,
                { backgroundColor: isValid ? mainColor : "#5f96e8b7" },
              ]}
            >
              <Text style={styles.textRegister}>ثبت</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <Modal visible={showAnimation}>
        <Lottie />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#edededff",
    height: 48,
    borderRadius: 25,
    paddingLeft: 0,
    paddingTop: 10,
    paddingRight: 40,
    fontSize: 15,
    color: "#575757ff",
    fontWeight: "bold",
  },
  price_input: {
    width: "44%",
    paddingRight: 32,
  },

  registerButton: {
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    height: 49,
  },
  textRegister: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
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
  errorMessage: {
    color: "red",
    paddingTop: 5,
    paddingRight: 8,
  },
  animationContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
});

export default AddItemFields;
