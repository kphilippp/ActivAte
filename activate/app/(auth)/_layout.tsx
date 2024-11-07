import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="sign_in" options={{ headerShown: false }} />
      <Stack.Screen name="sign_up" options={{ headerShown: false }} />
      <Stack.Screen name="profile_configure" options={{ headerShown: false }} />
      <Stack.Screen
        name="profile_configure2"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
