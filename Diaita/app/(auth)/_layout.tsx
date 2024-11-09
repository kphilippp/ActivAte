import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/explore"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="sign_in" options={{ headerShown: false }} />
      <Stack.Screen name="sign_up" options={{ headerShown: false }} />
    </Stack>
  );
}
