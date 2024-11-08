import CustomButton from "../../components/Button";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

import { router } from "expo-router";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 justify-center align-middle mx-10 my-52">
      <View className="flex-1 justify-between">
        <View className="mb-28">
          <Text className="font-bold text-heading leading-[3.7rem]">
            Welcome Back
          </Text>
          <Text className="text-subheading ml-">
            Achieve your fitness alongside your friends
          </Text>
        </View>
        <View className="flex-1 justify-between">
          <View>
            <TextInput
              className="bg-black rounded-lg p-5"
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            ></TextInput>
            <TextInput
              className="bg-black rounded-lg p-5 text-input_placeholder"
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
