import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { useFetchData } from "../../hooks/useFetchData";

export default function AvailableBrands() {
  const { data: models, isLoading } = useFetchData("models", "makes", true);

  return (
    <View className="mt-5">
      <Text className={`mb-2 text-lg font-["Poppins-SemiBold"]`}>
        Available Brands
      </Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={models}
          renderItem={({ item }) => (
            <View className="bg-[#009456] px-4 py-2 rounded-lg">
              <Text className={`text-white font-["Poppins-SemiBold"]`}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: 5 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}
