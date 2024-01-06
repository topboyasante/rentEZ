import React, { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import AvailableBrands from "../../components/home/AvailableBrands";
import SafeAreaContainer from "../../ui/SafeAreaContainer";
import { colors } from "../../utils/constants";
import TrendingRides from "../../components/home/TrendingRides";
import RecentRides from "../../components/home/RecentRides";

export default function HomeScreen() {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);

  return (
    <SafeAreaContainer>
      {/* Container: Displays the user's current location and profile picture */}
      <View className="flex flex-row justify-between items-center mb-5">
        {/* Current Location */}
        <View className="flex flex-row items-center gap-3">
          <View>
            <MapPinIcon color={colors.primary} size={30} />
          </View>
          <View>
            <Text className={`text-[#777777] font-["Poppins-Regular"]`}>Your Location</Text>
            <View className="flex flex-row items-center space-x-2">
              <Text className={`text-xl font-semibold font-["Poppins-SemiBold"]`}>
                Ngleshi Amanfro, Accra
              </Text>
              <ChevronDownIcon color={colors.primary} size={20} />
            </View>
          </View>
        </View>
        {/* Profile Picture */}
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            className="w-[50px] h-[50px] rounded-full"
          />
        </View>
      </View>
      {/* Container: Displays the Search Box */}
      <View className="flex flex-row justify-between items-center space-x-2">
        {/* Search Box */}
        <TouchableOpacity
          onPress={() => setOpenSearchModal(true)}
          className="w-[90%]"
        >
          <View className="w-full flex flex-row items-center space-x-2 border px-4 py-2 rounded-xl border-[#777777]">
            <MagnifyingGlassIcon color={colors.primary} size={20} />
            <Text className={`font-["Poppins-Regular"]`}>Search</Text>
          </View>
        </TouchableOpacity>
        <View className="w-[10%] flex flex-row justify-center items-center bg-[#009456] rounded px-2 py-1">
          <TouchableOpacity onPress={() => setOpenFilterModal(true)}>
            <AdjustmentsVerticalIcon color={"white"} size={30} />
          </TouchableOpacity>
        </View>
      </View>

      {/* FlatList of Car Models */}
      <AvailableBrands />
      <RecentRides/>

      {/* Modals */}
      <>
        {/* Search Modal */}
        <Modal
          visible={openSearchModal}
          onRequestClose={() => setOpenSearchModal(false)}
          animationType="slide"
        >
          <SafeAreaContainer>
            <View>
              <View className="flex flex-row justify-between items-center space-x-2">
                <View className="w-[85%] flex flex-row items-center space-x-2 border px-4 py-2 rounded-lg border-[#777777]">
                  <MagnifyingGlassIcon color={colors.primary} size={20} />
                  <Text>Search</Text>
                </View>
                <View className="w-[15%] flex flex-row justify-center items-center">
                  <TouchableOpacity onPress={() => setOpenSearchModal(false)}>
                    <Text className="font-semibold text-red-700">Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaContainer>
        </Modal>

        {/* Filter Modal */}
        <Modal
          visible={openFilterModal}
          onRequestClose={() => setOpenFilterModal(false)}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <SafeAreaContainer>
            <View>
              <View className="flex flex-row justify-between items-center space-x-2">
                <Text>Filter Modal Content</Text>

                <View className="w-[15%] flex flex-row justify-center items-center">
                  <TouchableOpacity onPress={() => setOpenFilterModal(false)}>
                    <Text className="font-semibold text-red-700">Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaContainer>
        </Modal>
      </>
    </SafeAreaContainer>
  );
}
