import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Button,
} from "react-native";
import Products from "./Products";

function Header({ category, setCategory }) {
  const categorys = [
    {
      id: 1,
      category: "پوشاک",
    },
    {
      id: 2,
      category: "کتاب",
    },
    {
      id: 3,
      category: "کالای دیجیتال",
    },
    {
      id: 4,
      category: "لوازم خانگی",
    },
    {
      id: 5,
      category: "بازی",
    },
    {
      id: 6,
      category: "سایر",
    },
  ];

  const [showCategory, setShowCategory] = useState();

  useEffect(() => {
    if (showCategory) {
      const result = categorys.filter((item) => {
        return item.category.includes(showCategory.category);
      });
      setCategory(result);
    }
  }, [showCategory]);
  const handle = () => {
    console.log("object");
    setCategory([
      {
        id: undefined,
        category: undefined,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.categoryButtonContainer}
      >
        {category[0].category && (
          <TouchableOpacity style={styles.allGoods} onPress={() => handle()}>
            <Text style={styles.allGoodsText}>همه</Text>
          </TouchableOpacity>
        )}
        {categorys.map((item) => {
          return (
            <TouchableOpacity
              style={
                category[0].category === item.category && category
                  ? styles.categoryButtonActive
                  : styles.categoryButton
              }
              key={item.id}
              onPress={() => setShowCategory(item)}
            >
              <Text
                style={
                  category[0].category === item.category && category
                    ? styles.titleCategoryActive
                    : styles.titleCategory
                }
              >
                {item.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingTop: 5,
  },
  allGoods: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginRight: 5,

    backgroundColor: "#fff",
  },
  allGoodsText: {
    fontSize: 13.5,
    fontWeight: "600",
    color: "#56cadcff",
  },
  categoryButtonContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  categoryButtonActive: {
    paddingHorizontal: 26,
    height: 35,
    marginHorizontal: 5,
    borderRadius: 17,
    backgroundColor: "#56cadcff",
    justifyContent: "center",
  },
  categoryButton: {
    paddingHorizontal: 26,
    justifyContent: "center",
    height: 35,
    marginHorizontal: 5,
    borderRadius: 17,
    backgroundColor: "#fff",
  },
  titleCategoryActive: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#fff",
  },

  titleCategory: { fontWeight: "bold", fontSize: 14 },
});

export default Header;
