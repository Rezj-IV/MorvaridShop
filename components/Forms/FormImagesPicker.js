import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImageInputList from "../AddItemComponents/ImageInputList";
import { useFormikContext } from "formik";

function FormImagesPicker({ name }) {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name , [...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(name ,imageUris.filter((image) => image !== uri));
  };
  return (
    <View>
    <ImageInputList
      imageUris={imageUris}
      addImage={handleAdd}
      removeImage={handleRemove}
      />
      {errors[name] && (
        <Text>{errors[name]}</Text>
      )}
      </View>
  );
}

export default FormImagesPicker;
