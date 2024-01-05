import { SafeAreaView, TouchableOpacity, View } from "react-native";
import {
  BookmarkIcon as BookmarkIconSolid,
  UserIcon as UserIconSolid,
  HomeIcon as HomeIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
} from "react-native-heroicons/mini";
import { TabStyles } from "../styles/tabBar.styles";
import { colors } from "../utils/constants";

export function TabBar({ state, descriptors, navigation }) {
  //TabBar takes in three props: State, Descriptors and Navigation.
  //In this function, we are returning a <SafeAreaView/>
  return (
    <SafeAreaView edges={["bottom"]} className="bg-white">
      <View style={TabStyles.tabsViewContainer}>
        {/* 
          The state prop has a routes property (which is an array containing all the routes in our app).
          We map through the array to return a <TouchableOpacity/> for each array item.
        */}
        {state.routes.map((route, index) => {
          //Descriptors is an array of objects, and each object has an "options" property.
          //route here refers to an item in the routes array. "route" is an object
          //route has an "key" property, and we are using it as the index to access the "options" property of each item in the descriptors array
          const { options } = descriptors[route.key];
          //the label variable checks if options.tabBarLabel is not undefined and sets it to options.tabBarLabel if true.
          //if false, it checks if options.title is not undefined and sets it to options.tabBarLabel
          //if false it sets it to route.name
          //this varible is used to provide a "label" for the tab bar routes
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          //variable to check if the link we are currently mapping is the active or focused link.
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          //this function renders an Icon for each route
          function renderIcons(label) {
            switch (label) {
              case "home":
                  return <HomeIconSolid
                    size={30}
                    color={isFocused ? colors.primary : colors.gray}
                  />
              case "search":
                  return <MagnifyingGlassIconSolid
                    size={30}
                    color={isFocused ? colors.primary : colors.gray}
                  />
              case "orders":
                  return <BookmarkIconSolid
                    size={30}
                    color={isFocused ? colors.primary : colors.gray}
                  />
              case "user":
                  return <UserIconSolid
                    size={30}
                    color={isFocused ? colors.primary : colors.gray}
                  />
            }
          }

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={label}
            >
              {renderIcons(label)}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
