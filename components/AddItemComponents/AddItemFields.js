import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Formik } from "formik";
import { useState } from "react";
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
function AddItemFields(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [showAnimation, setshowAnimation] = useState(false);
  
  const showToast = () => {
    ToastAndroid.show(" کالا شما با موفقیت ثبت شد", ToastAndroid.SHORT);
  };

  const onSubmit = (values) => {
    setshowAnimation(true);
  
    setTimeout(() => {
      setshowAnimation(false);
    }, 3650);
    showToast();
    
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
