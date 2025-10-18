import { Link } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";

export const product = ({ item }) => (
  <Link style={styles.link} href={`/product/${item.id}`}>
    <View style={styles.child}>
      <Image style={styles.image} source={{ uri: item.indexImageUrl }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>

        <View style={styles.priceContainer}>
          <Text style={[styles.price]}>{item.price}</Text>
          <Text style={[styles.toman]}>ت </Text>
        </View>
      </View>
    </View>
  </Link>
);

export const styles = StyleSheet.create({
  ProductsContainer: {
    alignItems: "center",
    direction: "rtl",
  },
  link: {
    width: 350,
    marginVertical: 10,
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
    paddingHorizontal: 5,
    fontWeight: "600",
    fontStyle: "italic",
    color: "#56cadcff",

    fontSize: 12,
    fontFamily: "cursive",
  },
});
