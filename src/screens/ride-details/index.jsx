import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BoltIcon,
  Cog8ToothIcon,
  ChevronLeftIcon,
  StarIcon,
  BanknotesIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { rides } from "../../db";
import { useNavigation } from "@react-navigation/native";

export default function RideDetails({ route }) {
  const { id } = route.params;
  const currentCar = rides.find((i) => i.id === id);
  const navigate = useNavigation();

  return (
    <ScrollView>
      {/* Back Button */}
      <SafeAreaView>
        <View className="p-5">
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <View className="flex flex-row items-center space-x-2">
              <ChevronLeftIcon color={"#2c6e49"} size={18} />
              <Text
                className={`font-["Poppins-SemiBold"] text-[#009456] text-lg capitalize`}
              >
                Back
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* Image of the Car */}
      <View className="mb-8 p-5">
        <Image
          source={{
            uri: `${currentCar.img}`,
          }}
          className="w-full h-[200px] object-contain"
        />
      </View>
      {/* Car Details */}
      <View className="bg-[#009456] px-5 py-10 rounded-t-3xl h-auto">
        {/* Car Name */}
        <View className="flex flex-row justify-between items-center">
          <Text
            className={`font-["Poppins-Bold"] text-white text-2xl capitalize`}
          >
            {currentCar.name}
          </Text>
          <View className="flex flex-row items-center space-x-2">
            <StarIcon color={"#ffd166"} size={20} />
            <Text
              className={`font-["Poppins-SemiBold"] text-[#f5f5f5] text-lg`}
            >
              {currentCar.rating}
            </Text>
          </View>
        </View>
        {/* Horsepower and Transmission */}
        <View className="flex flex-row items-center space-x-2 mt-3">
          <View className="flex flex-row items-center space-x-1">
            <BoltIcon color={"#f5f5f5"} size={18} />
            <Text className={`font-["Poppins-Regular"] text-[#f5f5f5] text-lg`}>
              {currentCar.horsepower} hp
            </Text>
          </View>
          <View className="flex flex-row items-center space-x-1">
            <Cog8ToothIcon color={"#f5f5f5"} size={18} />
            <Text className={`font-["Poppins-Regular"] text-[#f5f5f5] text-lg`}>
              {currentCar.transmission}
            </Text>
          </View>
        </View>
        {/* Price */}
        <View className="my-5 flex flex-row items-center space-x-2">
          <BanknotesIcon color={"#f5f5f5"} size={20} />
          <Text className={`font-["Poppins-SemiBold"] text-white text-2xl`}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "GHC",
            }).format(Number(currentCar.price))}{" "}
            / day
          </Text>
        </View>
        {/* Features */}
        <View className="mb-5">
          <Text className={`font-["Poppins-SemiBold"] text-[#f5f5f5] text-lg`}>
            Features
          </Text>
          {currentCar.features.map((item, index) => {
            return (
              <View
                className="flex flex-row items-center space-x-2"
                key={index}
              >
                <Text className={`text-[#f5f5f5] text-2xl`}>·</Text>
                <Text
                  className={`font-["Poppins-Regular"] text-[#f5f5f5] text-lg`}
                >
                  {item}
                </Text>
              </View>
            );
          })}
        </View>
        {/* Location */}
        <View className="mb-5 flex flex-row items-center space-x-2">
          <MapPinIcon color={"#f5f5f5"} size={20} />
          <Text className={`font-["Poppins-SemiBold"] text-white text-xl`}>
            {currentCar.location}
          </Text>
        </View>
        {/* CTA */}
        <View className="bg-white px-4 py-2 rounded-lg">
          <TouchableOpacity>
            <Text
              className={`font-["Poppins-SemiBold"] text-[#009456] text-lg text-center`}
            >
              Book Ride
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
