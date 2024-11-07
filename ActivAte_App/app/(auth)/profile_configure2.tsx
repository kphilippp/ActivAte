import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import _colors from "@/assets/colors";
import CustomButton from "@/components/Button";
import { router } from "expo-router";

const ProfileConfigureScreen = () => {
  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.container}>
        <View style={{ gap: 10 }}>
          <Text style={styles.heading}>Welcome to ActivAte</Text>
          <Text style={styles.caption}>
            Achieve your fitness alongside your friends
          </Text>
        </View>
        <View>
          <View style={styles.space_between_container}>
            <View></View>
            <CustomButton
              text="Finish"
              w="100%"
              h={60}
              color={_colors.button_primary}
              onPress={() => {
                router.replace("/(root)/(tabs)/tracker_page");
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileConfigureScreen;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: _colors.login_main,
    flex: 1,
  },
  container: {
    paddingTop: "30%",
    paddingLeft: "12%",
    paddingRight: "12%",
    paddingBottom: "30%",
    flex: 1,
    justifyContent: "space-between",
  },
  space_between_container: {
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
  input: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: _colors.input_background,
    color: _colors.text_primary,
  },
});
