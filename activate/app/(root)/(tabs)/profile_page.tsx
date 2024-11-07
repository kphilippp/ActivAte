import { colors_ } from "@/constants/Colors";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <View>fdlkvdflkv</View>
      <View>fdlkvdflkv</View>
      <View></View>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: colors_.app_main,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  space_between_container: {
    justifyContent: "space-between",
  },
  heading: {
    color: colors_.text_primary,
    fontWeight: "bold",
    fontSize: 60,

    lineHeight: 55,
  },
  caption: {
    color: colors_.text_primary,

    fontSize: 20,
  },
  input: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: colors_.input_background,
    color: colors_.text_primary,
  },
});

export default ProfilePage;
