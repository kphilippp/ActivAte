import CustomButton from "../../components/Button";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

import { router } from "expo-router";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-login_main ">
      <View className="flex-1 justify-between px-16 py-36 ">
        <View className="mb-28 ">
          <Text className="font-bold text-heading leading-[3.7rem] text-text_primary">
            Welcome Back
          </Text>
          <Text className="text-subheading ml-1 text-text_primary">
            Achieve your fitness alongside your friends
          </Text>
        </View>
        <View className="flex-1 justify-between">
          <View>
            <TextInput
              className="bg-input_background placeholder:text-input_placeholder rounded-lg p-5 mb-3"
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            ></TextInput>
            <TextInput
              className="bg-input_background placeholder:text-input_placeholder rounded-lg p-5 mb-3"
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
            ></TextInput>
          </View>
          <View>
            <CustomButton
              text="BIGjnkdjfngkdjn"
              h="6"
              color={"black"}
              tColor={"white"}
              onPress={() => {
                router.replace("/");
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
