import { Link, useNavigation } from "expo-router";
import React from "react";
import {
  Alert,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Button, Image, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Formik } from "formik";
import * as Yup from "yup";
import { mainColor } from "../ui/Color";
import { FieldStyles } from "./FieldStyles";
function SignUpForm(props) {
  const navigatiuon = useNavigation();

  const onSubmit = (values) => {
    fetch("https://rjland.ir/api/users/register", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())

      .then((data) => {
        console.log("success", data);
        Alert.alert(
          "ثبت نام با موفقیت انجام شد",
          " و حالا بایستی به حساب خود وارد شوید.",
          [
            {
              text: "ورود به حساب",
              onPress: () => {
                navigatiuon.navigate("Login");
              },
            },
          ]
        );
      })
      .catch((error) => console.log(error));
  };
  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "باید حداقل شامل سه کارکتر باشد")
      .required("نام کاربری خود را وارد کنید"),
    password: Yup.string()
      .min(6, "باید حداقل شامل شش کارکتر باشد")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        " باید حداقل یک حروف کوچک و بزرگ , یک عدد و کارکتر خاص داشته باشد"
      )
      .required("رمز عبور خود را وارد کنید"),
    confirmPassword: Yup.string()
      .min(6, "باید حداقل شامل شش کارکتر باشد")
      .oneOf([Yup.ref("password")], "رمز عبور مطابقت  ندارد"),
    email: Yup.string()
      .email("فرمت پست الکترونیکی اشتباه است")
      .required("پست الکترونیکی خود را وارد کنید"),
  });

  return (
    <View style={FieldStyles.container}>
      <TouchableWithoutFeedback onPress={() => navigatiuon.goBack()}>
        <View style={FieldStyles.goBack}>
          <AntDesign name="swap-right" size={24} color="#080843ff" />
          <Text style={FieldStyles.goBackText}>بازگشت</Text>
        </View>
      </TouchableWithoutFeedback>
      <Image
        style={FieldStyles.mainImage}
        source={require("../../assets/images/blueImage2.jpg")}
      />
      <View style={FieldStyles.wavesImgContainer}>
        <ImageBackground
          style={FieldStyles.wavesImg}
          source={require("../../assets/images/waves1.png")}
        >
          <View style={FieldStyles.titleContainer}>
            <Text style={FieldStyles.title}>ثبت نام</Text>
            <Text style={{}}>حساب خود را بسازید.</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={FieldStyles.formContainer}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
          // onSubmit={values=>Alert.alert(JSON.stringify(values))}
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
            <View style={FieldStyles.inputContainer}>
              <View>
                <View style={FieldStyles.inputChild}>
                  <Text style={FieldStyles.label}>نام کاربری</Text>
                  <TextInput
                    style={FieldStyles.input}
                    placeholder="لطفا نام کاربری خود را وارد کنید"
                    placeholderTextColor="#ccccccff"
                    value={values.username}
                    onBlur={() => setFieldTouched("username")}
                    onChangeText={handleChange("username")}
                  />
                  {touched.username && errors.username && (
                    <Text style={FieldStyles.errorMessage}>
                      {errors.username}
                    </Text>
                  )}
                </View>

                <View style={FieldStyles.inputChild}>
                  <Text style={FieldStyles.label}>رمز عبور</Text>
                  <TextInput
                    style={FieldStyles.input}
                    placeholder="لطفا رمز عبور خود را وارد کنید"
                    placeholderTextColor="#ccccccff"
                    value={values.password}
                    onBlur={() => setFieldTouched("password")}
                    onChangeText={handleChange("password")}
                  />
                  {touched.password && errors.password && (
                    <Text style={FieldStyles.errorMessage}>
                      {errors.password}
                    </Text>
                  )}
                </View>

                <View style={FieldStyles.inputChild}>
                  <Text style={FieldStyles.label}> تایید رمز عبور </Text>
                  <TextInput
                    style={FieldStyles.input}
                    placeholder="لطفا رمز عبور خود را تایید کنید"
                    placeholderTextColor="#ccccccff"
                    
                    value={values.confirmPassword}
                    onChangeText={handleChange("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <Text style={FieldStyles.errorMessage}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>
                <View style={FieldStyles.inputChild}>
                  <Text style={FieldStyles.label}>پست الکترونیکی</Text>
                  <TextInput
                    style={FieldStyles.input}
                    placeholder="لطفا پست الکترونیکی خود را تایید کنید"
                    placeholderTextColor="#ccccccff"
                    value={values.email}
                    onChangeText={handleChange("email")}
                  />
                  {errors.email && (
                    <Text style={FieldStyles.errorMessage}>{errors.email}</Text>
                  )}
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    FieldStyles.loginButton,
                    { backgroundColor: isValid ? mainColor : "#91b1e1c6" },
                  ]}
                  onPress={handleSubmit}
                >
                  <Text style={FieldStyles.loginButtontext}>ثبت نام</Text>
                </TouchableOpacity>
                <View style={FieldStyles.goSignUp}>
                  <Text>در صورت داشتن حساب</Text>
                  <Link href="/Login" style={FieldStyles.linkSignUp}>
                    وارد
                  </Link>
                  <Text>شوید</Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

export default SignUpForm;
