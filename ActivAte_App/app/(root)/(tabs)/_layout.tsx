import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomNavBar from "@/components/CustomNavBar";
import MyGroupsPage from "./my_groups_page";
import ProfilePage from "./profile_page";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator tabBar={(props) => <CustomNavBar {...props} />}>
        <Tab.Screen
          component={MyGroupsPage}
          name="my_groups_page"
          options={{ headerShown: false }}
        />
        <Tab.Screen
          component={ProfilePage}
          name="tracker_page"
          options={{ headerShown: false }}
        />
        <Tab.Screen
          component={MyGroupsPage}
          name="profile_page"
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
