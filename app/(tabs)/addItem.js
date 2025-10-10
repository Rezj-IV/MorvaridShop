import { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import ImageInputList from "../../components/AddItemComponents/ImageInputList";
import AddItemFields from "../../components/AddItemComponents/AddItemFields";

const addItem = () => {
  // const [imageUris, setImageUris] = useState([]);
  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };
  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((image) => image !== uri));
  // };
  return (
    <View style={styles.addItemContainer}>
      <Text style={styles.header}>کالا جدید</Text>
      {/* <ImageInputList
        imageUris={imageUris}
        addImage={handleAdd}
        removeImage={handleRemove}
      /> */}
      
      <AddItemFields />
    </View>
  );
};

export default addItem;

const styles = StyleSheet.create({
  addItemContainer: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 18,
    direction: "rtl",
    backgroundColor: "#f7f7f7ff",
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical:10,
    color:"#7d7d7dff",
    fontStyle:"italic",
    textAlign:"center",
    borderBottomWidth:1,
    borderStyle:"dotted",
    borderBottomColor:"gray",
    marginBottom:30
    ,fontFamily:"yekan-bakh-regular"
  },
});
