import { View, Text, Image } from "react-native";
import React from "react";
import { rides } from "../../db";
import { BoltIcon, Cog8ToothIcon } from "react-native-heroicons/solid";

export default function RecentRides() {
  return (
    <View className="mt-5">
      <Text className={`mb-2 text-lg font-["Poppins-SemiBold"]`}>
        Recent Rides
      </Text>
      <View>
        {/* {isLoading ? (
            <ActivityIndicator />
          ) : ( */}
        <View>
          {rides &&
            rides.map((item, index) => {
              return (
                <View
                  className={`border-2 border-primary mb-5 rounded-lg`}
                  key={index}
                >
                  <Image
                    source={{
                      uri: `${item.img}`,
                    }}
                    className="w-full h-[200px] object-contain"
                  />
                  <View className="p-3">
                    <Text
                      className={`font-["Poppins-SemiBold"] text-primary text-2xl capitalize`}
                    >
                      {item.name}
                    </Text>
                    <View className="mt-2 flex flex-row justify-between items-center">
                      <View className="flex flex-row items-center space-x-2">
                        <View className="flex flex-row items-center space-x-1">
                          <BoltIcon color={"#777777"} size={18} />
                          <Text
                            className={`font-["Poppins-Regular"] text-[#777777] text-lg`}
                          >
                            {item.horsepower} hp
                          </Text>
                        </View>
                        <View className="flex flex-row items-center space-x-1">
                          <Cog8ToothIcon color={"#777777"} size={18} />
                          <Text
                            className={`font-["Poppins-Regular"] text-[#777777] text-lg`}
                          >
                            {item.transmission}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text
                          className={`font-["Poppins-Regular"] text-[#777777] text-lg`}
                        >
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "GHC",
                          }).format(Number(item.price))}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
        </View>
        {/* )} */}
      </View>
    </View>
  );
}
