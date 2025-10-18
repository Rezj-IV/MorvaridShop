import { Link, Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import Color, { mainColor } from "../../../../components/ui/Color";
import axios from "axios";

function singlePrd(props) {
  const { singlePrd } = useLocalSearchParams();

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const response = await axios.get(
      `http://10.158.9.23:9095/MorvaridShop/${singlePrd}`
    );
    const data = await response.data;

    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log("latitude", product.latitude);
  const locate = {
    latitude: Number(product.latitude),
    longitude: Number(product.longitude),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // const locate = {
  //   latitude: 35.68982981668057,
  //   longitude: 50.84257936409913,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: product.indexImageUrl,
          }}
        />
        <View style={{ paddingHorizontal: 15 }}>
          <View style={styles.prdContent}>
            <Text style={styles.name}>{product.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={[styles.price]}>{product.price}</Text>
              <Text style={[styles.toman]}>ت </Text>
            </View>
          </View>

          <View style={styles.userContent}>
            <Image
              style={styles.userImage}
              source={{
                uri: "https://static.vecteezy.com/system/resources/thumbnails/048/926/084/small_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg",
              }}
            />
            <Text style={styles.username}>{product.seller}</Text>
          </View>

          <TextInput style={[styles.notification, styles.measurement]} placeholder="پیام شما به فروشنده"/>
           
          <TouchableOpacity onPress={{}}>
            <View style={[styles.measurement, styles.sendToSeller]}>
              <Text style={styles.sendToSellerText}>ارسال به فروشنده</Text>
            </View>
          </TouchableOpacity>
        </View>
        {product && (
          <View style={styles.locationContainer}>
            <MapView style={StyleSheet.absoluteFill} initialRegion={locate}>
              <Marker coordinate={locate} key={product.id}>
                <Image
                  source={{
                    uri: "https://img.icons8.com/?size=80&id=XieTOK4V0QEI&format=png",
                  }}
                  style={{ height: 38, width: 38 }}
                />
              </Marker>
            </MapView>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    direction: "rtl",
  },
  image: {
    width: "100%",
    height: 280,
  },
  prdContent: {
    width: "100%",
    height: 65,
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
  },
  priceContainer: {
    flexDirection: "row",
    paddingTop: 1.5,
  },
  price: {
    fontSize: 15,
    color: mainColor,
    fontWeight: "600",
    fontFamily: "cursive",
  },
  toman: {
    paddingRight: 5,
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: 12,
    color: mainColor,
    fontFamily: "cursive",
  },
  userContent: {
    width: "100%",
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  username: {
    paddingRight: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  locationContainer: {
    width: "100%",
    height: 195,
  },
  measurement: {
    width: "100%",
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
  },
  notification: {
    backgroundColor: "#e9e9e9ff",
    marginTop: 10,
    marginBottom: 16,
    paddingHorizontal:20
  },

  sendToSeller: {
    backgroundColor: mainColor,
  },
  sendToSellerText: {
    color: "white",
    fontWeight: "600",
    fontSize: 17,
    textAlign: "center",
  },
});

export default singlePrd;
