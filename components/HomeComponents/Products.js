import axios from "axios";
import { Link, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, FlatList, Button } from "react-native";
import * as Network from "expo-network";
const Products = ({ Category }) => {
  const [products, setProducts] = useState([]);

  const navigation = useNavigation();
  const getProducts = async () => {
    const ip = await Network.getIpAddressAsync();
    const response = await axios.get(`http://10.204.1.23:9095/MorvaridShop`);
    const data = await response.data;
    console.log(ip);
    setProducts(data);
  };
  const [productCategory, setProductCategory] = useState([]);

  useEffect(() => {
    getProducts();
    if (Category) {
      const filterCategory = products.filter((item) => {
        return item.category.includes(Category);
      });
      setProductCategory(filterCategory);
    }
  }, [Category]);

  const product = ({ item }) => (
    <Link style={styles.link} href={`product/${item.id}`}>
      <View style={styles.child}>
        <Image style={styles.image} source={{ uri: item.indexImageUrl }} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>

          <View style={styles.priceContainer}>
            <Text style={[styles.toman]}>ت </Text>

            <Text style={[styles.price]}>{item.price}</Text>
          </View>
        </View>
      </View>
    </Link>
  );
  return (
    <FlatList
      contentContainerStyle={styles.productContainer}
      renderItem={product}
      data={Category ? productCategory : products}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  link: {
    width: 350,
    marginVertical: 10,
  },
  productContainer: {
    alignItems: "center",
  },
  child: {
    borderRadius: 10,
    width: "100%",
    height: 242,
    backgroundColor: "#ffffffff",
    marginTop: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "72.5%",
  },
  infoContainer: {
    paddingTop: 7,
    paddingLeft: 13,
  },
  name: {
    fontSize: 15.5,
  },

  priceContainer: {
    flexDirection: "row",
    paddingTop: 1.5,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "cursive",
    color: "#56cadcff",
  },
  toman: {
    paddingRight: 5,
    fontWeight: "600",
    fontStyle: "italic",
    color: "#56cadcff",

    fontSize: 12,
    fontFamily: "cursive",
  },
});

export default Products;
