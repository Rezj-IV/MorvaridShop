import { Link, useNavigation } from "expo-router";
import React from "react";
import {
  Alert,
  Button,
  ImageBackground,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Formik } from "formik";
import * as Yup from "yup";
import { mainColor } from "../../components/ui/Color";
import { FieldStyles } from "../../components/Forms/FieldStyles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Login(props) {
  const navigation = useNavigation();

  const showToast = () => {
    ToastAndroid.show("نام کاربری یا رمزعبور اشتباه است", ToastAndroid.LONG);
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://rjland.ir/api/users/login",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const token = await response.data.token;
  
      if (token) {
        await AsyncStorage.setItem("jwtToken", token);
        navigation.navigate("(tabs)");
      } else {
        console.log("No token received");
      }
    } catch (error) {
      console.log("responseError", error);
      showToast();
    }
  };
  

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("نام کاربری خود را وارد کنید"),
    password: Yup.string().required("رمز عبور خود را وارد کنید"),
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
            <Text style={FieldStyles.title}>ورود</Text>
            <Text style={{}}>به حساب خود وارد شوید .</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={FieldStyles.formContainer}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
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
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    FieldStyles.loginButton,
                    { backgroundColor: isValid ? mainColor : "#91b1e1c6" },
                  ]}
                  onPress={handleSubmit}
                >
                  <Text style={FieldStyles.loginButtontext}>ورود</Text>
                </TouchableOpacity>
                <View style={FieldStyles.goSignUp}>
                  <Text>در صورت نداشتن حساب</Text>
                  <Link href="/Register" style={FieldStyles.linkSignUp}>
                    ثبت نام
                  </Link>
                  <Text>کنید</Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

export default Login;
