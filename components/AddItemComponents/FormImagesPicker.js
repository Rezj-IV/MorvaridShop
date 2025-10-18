import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImageInputList from "../AddItemComponents/ImageInputList";
import { useFormikContext } from "formik";

function FormImagesPicker({ name }) {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((image) => image !== uri)
    );
  };
  return (
    <View>
      <ImageInputList
        imageUris={imageUris}
        addImage={handleAdd}
        removeImage={handleRemove}
      />
      {errors[name] && <Text style={styles.errorMessage}>{errors[name]}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    paddingTop: 5,
    paddingRight: 8,
  },
});
export default FormImagesPicker;
