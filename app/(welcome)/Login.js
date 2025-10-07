import { useNavigation } from "expo-router";
import React from "react";
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Button, Image, Text, Touchable, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { mainColor } from "../../components/ui/Color";
function login(props) {
  const navigatiuon = useNavigation();

  const onSubmit = (values) => {
    console.log(values);
  };
  const initialValues = { username: "", password: "", confirmPassword: "" };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "باید حداقل شامل پنج کارکتر باشد")
      .required("نام کاربری خود را وارد کنید"),
    password: Yup.string()
      .min(6, "باید حداقل شامل شش کارکتر باشد")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        " باید حداقل یک حروف کوچک و بزرگ , یک عدد و کارکتر خاص داشته باشد"
      )
      .required("رمز عبور خود را وارد کنید"),
    confirmPassword: Yup.string()
      .min(8, "باید حداقل شامل شش کارکتر باشد")
      .oneOf([Yup.ref("password")], "رمز عبور مطابقت  ندارد"),
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigatiuon.goBack()}>
        <View style={styles.goBack}>
          <AntDesign name="swap-right" size={24} color="#080843ff" />
          <Text style={styles.goBackText}>بازگشت</Text>
        </View>
      </TouchableWithoutFeedback>
      <Image
        style={styles.mainImage}
        source={require("../../assets/images/blueImage2.jpg")}
      />

      <View style={styles.formContainer}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            setFieldTouched,
            handleSubmit,
            handleChange,
          }) => (
            <View style={styles.inputContainer}>
              <View>
                <View>
                  <Text style={styles.label}>نام کاربری</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="لطفا نام کاربری خود را وارد کنید"
                    placeholderTextColor="#ccccccff"
                    value={values.username}
                    onChangeText={handleChange("username")}
                  />
                  {errors.username && (
                    <Text style={styles.errorMessage}>{errors.username}</Text>
                  )}
                </View>

                <View style={{ paddingVertical: 17 }}>
                  <Text style={styles.label}>رمز عبور</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="لطفا رمز عبور خود را وارد کنید"
                    placeholderTextColor="#ccccccff"
                    value={values.password}
                    onChangeText={handleChange("password")}
                  />
                  {errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>

                <View>
                  <Text style={styles.label}> تایید رمز عبور </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="لطفا رمز عبور خود را تایید کنید"
                    placeholderTextColor="#ccccccff"
                    value={values.confirmPassword}
                    onChangeText={handleChange("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <Text style={styles.errorMessage}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>
              </View>
              <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
                <Text style={styles.loginButtontext}>ورود</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    direction: "rtl",
  },
  mainImage: {
    position: "absolute",
    zIndex: -1,
  },
  goBack: {
    marginTop: 41,
    paddingRight: 10,
    flexDirection: "row",
  },
  goBackText: {
    color: "#080843ff",

    fontSize: 16.5,
    fontWeight: "600",
  },
  formContainer: {
    width: "100%",
    height: "50%",
  },
  inputContainer: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 10,

    justifyContent: "space-between",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: mainColor,
  },
  errorMessage: {
    fontSize: 13.5,
    color: "red",
    paddingTop: 5,
  },
  label: {
    paddingRight: 2,
    fontSize: 15.5,
    fontWeight: "600",
  },
  loginButton: {
    width: "100%",
    height: 52,
    borderRadius: 13,
    justifyContent: "center",
    backgroundColor: mainColor,
    marginBottom: 20,
  },
  loginButtontext: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default login;
