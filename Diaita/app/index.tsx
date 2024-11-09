import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function Index() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/explore"} />;
  }
  return <Redirect href="/(onboarding)/welcome" />;
}
