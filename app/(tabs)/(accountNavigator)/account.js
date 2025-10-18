import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import AccountContent from "../../../components/AccountComponents/AccountContent";

function account(props) {
  return (
    <View style={styles.container}>
      <AccountContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#f7f7f7ff",
    flex: 1,
    direction:"rtl"
  },
});

export default account;
