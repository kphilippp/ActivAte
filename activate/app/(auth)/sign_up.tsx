import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors_ } from "@/constants/Colors";
import CustomButton from "@/components/Button.js";
import { router } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.container}>
        <View style={{ gap: 10 }}>
          <Text style={styles.heading}>Welcome to ActivAte</Text>
          <Text style={styles.caption}>
            Achieve your fitness alongside your friends
          </Text>
        </View>
        <View style={{ gap: 20 }}>
          <View style={{ gap: 10 }}>
            <View style={styles.nameContainer}>
              <TextInput
                style={styles.nameInputs}
                placeholder="First Name"
                onChangeText={setFirstName}
                placeholderTextColor={colors_.input_placeholder}
                value={firstName}
              ></TextInput>
              <TextInput
                style={styles.nameInputs}
                placeholder="Last Name"
                onChangeText={setLastName}
                placeholderTextColor={colors_.input_placeholder}
                value={lastName}
              ></TextInput>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Set Birthday"
              onChangeText={setBirthday}
              placeholderTextColor={colors_.input_placeholder}
              value={birthday}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={setEmail}
              placeholderTextColor={colors_.input_placeholder}
              value={email}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
              placeholderTextColor={colors_.input_placeholder}
              value={password}
            ></TextInput>
          </View>
          <View style={{ gap: 10 }}>
            <CustomButton
              text="Sign Up"
              h={60}
              w={"100%"}
              color={colors_.button_primary}
              onPress={() => {
                router.push("/(auth)/profile_configure");
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: colors_.login_main,
    flex: 1,
  },
  container: {
    paddingTop: "30%",
    paddingLeft: "12%",
    paddingRight: "12%",
    paddingBottom: "40%",
    flex: 1,
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
  nameContainer: {
    flexDirection: "row",
    gap: 10,
  },
  nameInputs: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: colors_.input_background,
    color: colors_.text_primary,
    flex: 1,
  },
});
