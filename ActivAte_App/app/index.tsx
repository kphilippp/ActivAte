import { Redirect } from "expo-router";

//This page maps to "/" route
export default function Index() {
  return <Redirect href="/(onboarding)/welcome" />;
}
