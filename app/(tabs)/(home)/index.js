import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";

import Content from "../../../components/HomeComponents/Content";
import Products from "../../../components/HomeComponents/Products";
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
