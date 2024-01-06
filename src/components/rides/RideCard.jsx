import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  BoltIcon,
  Cog8ToothIcon,
  StarIcon,
} from "react-native-heroicons/solid";

export default function RideCard({
  id,
  carName,
  horsePower,
  transmission,
  price,
  img,
  rating,
}) {
  const navigation = useNavigation();

  function gotToRideDetails(id) {
    navigation.navigate("ride_details", { id });
  }

  return (
    <View className={`border-2 border-[#009456] mb-5 rounded-lg py-5`} key={id}>
      <Image
        source={{
          uri: `${img}`,
        }}
        className="w-full h-[200px] object-contain"
      />
      <View className="px-3">
        <View className="flex flex-row justify-between items-center">
          <Text
            className={`font-["Poppins-SemiBold"] text-[#009456] text-2xl capitalize`}
          >
            {carName}
          </Text>
          <View className="flex flex-row items-center space-x-2">
            <StarIcon color={"#ffd166"} size={20} />
            <Text className={`font-["Poppins-Regular"] text-[#121212] text-lg`}>
              {rating}
            </Text>
          </View>
        </View>
        <View className="mt-2 flex flex-row justify-between items-center">
          <View className="flex flex-row items-center space-x-2">
            <View className="flex flex-row items-center space-x-1">
              <BoltIcon color={"#777777"} size={18} />
              <Text
                className={`font-["Poppins-Regular"] text-[#777777] text-lg`}
              >
                {horsePower} hp
              </Text>
            </View>
            <View className="flex flex-row items-center space-x-1">
              <Cog8ToothIcon color={"#777777"} size={18} />
              <Text
                className={`font-["Poppins-Regular"] text-[#777777] text-lg`}
              >
                {transmission}
              </Text>
            </View>
          </View>
          <View>
            <Text className={`font-["Poppins-Regular"] text-[#777777] text-lg`}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GHC",
              }).format(Number(price))}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => gotToRideDetails(id)}
            className="px-4 py-2 mt-4 bg-[#009456] w-[150px] rounded-md"
          >
            <Text
              className={`font-["Poppins-SemiBold"] text-white text-xl capitalize text-center`}
            >
              Book Ride
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
