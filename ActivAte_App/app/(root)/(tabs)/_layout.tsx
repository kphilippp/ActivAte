import { Tabs } from "expo-router";
import "react-native-reanimated";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="my_groups_page" href="/(root)/(tabs)/my_groups_page" />
      <Tabs.Screen name="profile_page" href="/(root)/(tabs)/profile_page" />
      <Tabs.Screen name="tracker_page" href="/(root)/(tabs)/tracker_page" />
    </Tabs>
  );
};

export default RootLayout;
