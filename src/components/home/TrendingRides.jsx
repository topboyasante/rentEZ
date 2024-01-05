import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import React from "react";
import { useFetchData } from "../../hooks/useFetchData";

export default function TrendingRides() {
  const { data: rides, isLoading } = useFetchData("rides", "cars", false);

  return (
    <ScrollView>
      <View className="mt-5">
        <Text className={`mb-2 text-lg font-["Poppins-SemiBold"]`}>
          Trending Rides
        </Text>
        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View>
              {rides &&
                rides.map((item, index) => {
                  return (
                    <View
                      className={`border-2 border-primary my-3 rounded-xl p-5`}
                      key={index}
                    >
                      <Text
                        className={`font-["Poppins-SemiBold"] text-primary text-2xl capitalize`}
                      >
                        {item.make}
                      </Text>
                      <Text
                        className={`font-["Poppins-Regular"] text-[#777777] text-lg capitalize`}
                      >
                        {item.model}
                      </Text>
                      <Image
                        source={{
                          uri: `https://static.vecteezy.com/system/resources/previews/019/546/416/original/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png`,
                        }}
                        className="w-full h-[200px] object-contain"
                      />
                    </View>
                  );
                })}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
