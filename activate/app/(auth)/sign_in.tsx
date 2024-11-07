import CustomButton from "@/components/Button";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors_ } from "@/constants/Colors";

import { router } from "expo-router";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.container}>
        <View style={{ gap: 10 }}>
          <Text style={styles.heading}>Welcome Back</Text>
          <Text style={styles.caption}>
            Achieve your fitness alongside your friends
          </Text>
        </View>
        <View style={{ gap: 20 }}>
          <View style={{ gap: 10 }}>
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
              text="Login"
              h={60}
              w={"100%"}
              color={colors_.button_secondary}
              onPress={() => {
                router.replace("/");
              }}
            />
            <CustomButton
              text="Sign Up"
              h={60}
              w={"100%"}
              color={colors_.button_primary}
              onPress={() => {
                router.replace("/(auth)/sign_up");
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
});

export default SignInScreen;
