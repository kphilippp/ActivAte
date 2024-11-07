import _colors from "@/assets/colors";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: _colors.app_main,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  heading: {
    color: _colors.text_primary,
    fontWeight: "bold",
    fontSize: 60,

    lineHeight: 55,
  },
  caption: {
    color: _colors.text_primary,

    fontSize: 20,
  },
});

export default ProfilePage;
