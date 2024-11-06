import { Redirect } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

//This page maps to "/" route
export default function Index() {
  return <Redirect href="/(auth)/sign-in" />;
}
