import React from "react";
import { Text, View } from "react-native";
import { rides } from "../../db";
import RideCard from "../rides/RideCard";

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
                <RideCard
                  carName={item.name}
                  horsePower={item.horsepower}
                  {...item}
                  key={index}
                />
              );
            })}
        </View>
        {/* )} */}
      </View>
    </View>
  );
}
