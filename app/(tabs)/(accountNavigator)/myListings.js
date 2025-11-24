import { View, StyleSheet, FlatList, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import axios from "axios";
import { Image } from "expo-image";
function myListings(props) {
  const params = useLocalSearchParams();
  const [sellersGoods, setSellersGoods] = useState([]);
  const getProducts = async () => {
    const response = await axios.get(
      `http://192.168.1.3:9095/MorvaridShop/seller/${params.seller}`
    );
    const data = await response.data;
    setSellersGoods(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const renderItem = ({ item }) => (
    <Link style={styles.link} href={`product/${item.id}`}>
      <View style={styles.child}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.indexImageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>

          <View style={styles.priceContainer}>
            <Text style={[styles.price]}>{item.price}</Text>
            <Text style={[styles.price]}>ت </Text>
          </View>
        </View>
      </View>
    </Link>
  );

  console.log(sellersGoods);
  return (
    <View style={styles.container}>
      {sellersGoods.length === 0 ? (
        <View style={styles.empty}>
          <Image
            style={styles.emptyImage}
            source={{
              uri: "https://cdni.iconscout.com/illustration/premium/thumb/not-found-illustration-svg-download-png-3363936.png",
            }}
          />
          <Text      style={styles.emptyText}>در حال حاضر شما هیچ کالای را ثبت نکردید.</Text>
        </View>
      ) : (
        <FlatList
          data={sellersGoods}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { direction: "rtl" ,     backgroundColor: "#f6f6f6ff" , flex:1 },
  link: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },
  child: {
    width: "100%",
    flexDirection: "row",
    height: "100%",
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "32%",
    height: "100%",
  },
  image: {
    width: 110,
    height: "100%",
  },
  infoContainer: {
    justifyContent: "center",
    width: "100%",
  },
  name: { fontSize: 15 },
  priceContainer: { flexDirection: "row", gap: 2 },

  price: { color: "#4f79b3ff", fontSize: 14 },
  empty: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f6f6f6ff",
    justifyContent: "center",
    alignItems: "center",
  },

  emptyImage: {
    width: "60%",
    height: 163,
  },
  emptyText:{
    fontSize:16,
    fontWeight:"600",
    color:"#687FD5"
  }
});

export default myListings;
