
import {  StyleSheet} from "react-native";
import LottieView from "lottie-react-native";

export default function Lottie() {
 
  return (
    <LottieView
      source={require("../../assets/Done.json")}
      style={{ width: "100%", height: "100%" }}
      autoPlay
      loop
    />
  );

}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
