import { StyleSheet } from "react-native";
import { sizes } from "../utils/constants";

export const TabStyles = StyleSheet.create({
  tabBarMainContainer: {
    backgroundColor: "#ffffff",
  },
  tabsViewContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    paddingBottom: 7,
    paddingTop: 10,
    width: sizes.screenWidth,
    paddingHorizontal: sizes.screenWidth / 20,
    borderTopColor: "#777777",
    borderTopWidth: 0.5,
  },
  tabBarIsActive: {
    color: "#3c6e71",
  },
  tabBarTouchableOpacity: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    flex: 1,
  },
});
