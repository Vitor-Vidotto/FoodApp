import React from "react";
import { View, FlatList, Image, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../Constant";

const RecipeCardList = ({ recipes }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("RecipeDetail", { item: item })}
          style={{
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
          }}
        >
          <Image
            source={item.image}
            style={{ width: 150, height: 150, resizeMode: "center" }}
          />
          <Text>{item.name}</Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text>{item.time}</Text>
            <Text> | </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginRight: 4 }}>{item.rating}</Text>
              <FontAwesome
                name="star"
                size={16}
                color={colors.COLOR_PRIMARY}
              />
            </View>
          </View>
        </Pressable>
      )}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RecipeCardList;
