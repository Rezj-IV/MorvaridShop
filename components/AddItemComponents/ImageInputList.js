import React, { useRef } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], addImage, removeImage }) {
  const scrollView = useRef();
  console.log(scrollView.current);
  return (
    <View style={styles.container}>
      <ScrollView horizontal ref={scrollView}   onContentSizeChange={()=>scrollView.current.scrollTo({ y: 0, animated: true })}>
        {imageUris.map((uri, index) => (
          <ImageInput
            imageUri={uri}
            key={index}
            onChangeImage={() => removeImage(uri)}
          />
        ))}
        <ImageInput onChangeImage={(uri) => addImage(uri)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",    

  },
});

export default ImageInputList;
