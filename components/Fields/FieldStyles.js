'use script'
import { StyleSheet } from "react-native";
import { mainColor } from "../ui/Color";

export const FieldStyles=StyleSheet.create({

    container: {
    flex: 1,
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

  wavesImgContainer: {
    width: "100%",
    height: "20%",
  },
  wavesImg: {
    width: "100%",
    justifyContent: "center",
    height: "100%",
  },
  titleContainer: {
    height: "70%",
    justifyContent: "flex-end",
    paddingRight: 15,
  },
  title: {
    fontSize: 26.5,
    fontWeight: "bold",
    color: "#090722ff",
  },
  formContainer: {
    width: "100%",
    height: "72.5%",
  },
  inputContainer: {
    height: "100%",
    // backgroundColor: "#FAFBFD",
    backgroundColor: "#ffffffff",
    paddingHorizontal: 16,
    paddingTop: 10,

    justifyContent: "space-between",
  },
  inputChild: {
    paddingBottom: 17,
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
    marginBottom: 10,
  },
  loginButtontext: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
  goSignUp: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    justifyContent: "center",
  },
  linkSignUp: {
    color: mainColor,

    paddingHorizontal: 3,
  },
})