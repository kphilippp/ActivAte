import { Tabs } from "expo-router";

import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="my_groups_page" options={{ headerShown: false }} />
      <Tabs.Screen name="tracker_page" options={{ headerShown: false }} />
      <Tabs.Screen name="profile_page" options={{ headerShown: false }} />
    </Tabs>
  );
}
