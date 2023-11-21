import React, { useState } from "react";
import { ScrollView, FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CategoriesFilter = ({ categoriesFromFirebase }) => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredRecipes = selectedCategory
    ? recipeList.filter((recipe) => recipe.id === selectedCategory)
    : recipeList;

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.buttonsContainer}>
          {categoriesFromFirebase.map((category) => (
            <Text
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.selectedCategoryButton,
              ]}
              onPress={() => handleCategoryClick(category.id)}
            >
              {category.category}
            </Text>
          ))}
        </View>
      </ScrollView>
      <FlatList
        data={filteredRecipes}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("RecipeDetail", { item: item })}
            style={styles.recipeCardContainer}
          >
            <Image source={item.image} style={styles.recipeImage} />
            <Text>{item.name}</Text>
            <View style={styles.recipeDetails}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{item.rating}</Text>
                <FontAwesome name="star" size={16} color={colors.COLOR_PRIMARY} />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: colors.COLOR_PRIMARY,
    color: colors.COLOR_LIGHT,
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  selectedCategoryButton: {
    backgroundColor: colors.COLOR_LIGHT,
    color: colors.COLOR_PRIMARY,
  },
  recipeCardContainer: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 26,
  },
  recipeImage: {
    width: 150,
    height: 150,
    resizeMode: "center",
  },
  recipeDetails: {
    flexDirection: "row",
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  ratingText: {
    marginRight: 4,
  },
});

export default CategoriesFilter;
