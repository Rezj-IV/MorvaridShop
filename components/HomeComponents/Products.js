import axios from "axios";
import { Link, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { product, styles } from "./ProductsContent";
const Products = ({ Category }) => {
  const [products, setProducts] = useState([]);

  const navigation = useNavigation();
  const getProducts = async () => {
    const response = await axios.get(`https://rjland.ir/api/MorvaridShop`);
    const data = await response.data;
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


  return (
    <FlatList
      contentContainerStyle={styles.ProductsContainer}
      renderItem={product}
      data={Category ? productCategory : products}
      keyExtractor={(item) => item.id}
    />
  );
};



export default Products;
