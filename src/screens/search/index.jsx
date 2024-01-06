import React from "react";
import { TextInput, View } from "react-native";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import SafeAreaContainer from "../../ui/SafeAreaContainer";
import { colors } from "../../utils/constants";

export default function SearchScreen() {
  return (
    <SafeAreaContainer>
      <View className="flex flex-row justify-between items-center space-x-2">
        {/* Search Box */}
        <View className="w-[90%] flex flex-row items-center space-x-2 border px-4 py-2 rounded-xl border-[#777777]">
          <MagnifyingGlassIcon color={colors.primary} size={20} />
          <TextInput
            placeholder="Search for a ride"
            className={`font-["Poppins-Regular"] w-[90%]`}
          />
        </View>
        <View className="w-[10%] flex flex-row justify-center items-center bg-[#009456] rounded px-2 py-1">
          <AdjustmentsVerticalIcon color={"white"} size={30} />
        </View>
      </View>
    </SafeAreaContainer>
  );
}
