import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import Content from "../../../components/HomeComponents/Content";

;
export default function HomeScreen() {

  return (
    <View style={styles.mainContainer}>
      <Content/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop:StatusBar.currentHeight,
    backgroundColor: "#f6f6f6ff",
    alignItems: "center",
    flex: 1,
  },

});
