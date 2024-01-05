import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function SafeAreaContainer({ children }) {
  return (
    <SafeAreaView>
      <ScrollView className="p-5">{children}</ScrollView>
    </SafeAreaView>
  );
}
