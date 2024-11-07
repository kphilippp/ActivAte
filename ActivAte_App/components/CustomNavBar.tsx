import { StyleSheet, Text, View } from "react-native";
import _colors from "@/assets/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomNavBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[
              styles.dot,
              isFocused ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        );
      })}
    </View>
  );
};

export default CustomNavBar;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: "50%",

    alignSelf: "center",
    marginBottom: 40,
    marginHorizontal: 50,
    backgroundColor: _colors.navbar_background,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: _colors.active_navbar,
    transform: [{ scale: 1.2 }],
  },
  inactiveDot: {
    backgroundColor: _colors.inactive_navbar,
  },
});
