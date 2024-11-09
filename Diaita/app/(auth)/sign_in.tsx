import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { router } from "expo-router";
import OAuth from "@/components/auth/OAuth";

const SignInScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    router.replace("/(root)/(tabs)/explore");
  };

  return (
    <SafeAreaView className="flex-1 bg-login_main ">
      <View className="flex-1 justify-between px-16 py-20">
        <View className="mb-60">
          <Text className="font-bold text-heading leading-[3.7rem] text-text_primary">
            Welcome Back
          </Text>
          <Text className="text-subheading ml-1 text-text_primary">
            Achieve your fitness alongside your friends
          </Text>
        </View>
        <View className="flex-1 justify-between">
          <View className="gap-3">
            <TextInput
              className="bg-input_background placeholder:text-input_placeholder text-text_primary rounded-lg p-5 "
              placeholder="Email"
              onChangeText={(changed) =>
                setFormData({ ...formData, email: changed })
              }
              value={formData.email}
            ></TextInput>
            <TextInput
              className="bg-input_background placeholder:text-input_placeholder text-text_primary rounded-lg p-5 "
              placeholder="Password"
              onChangeText={(changed) =>
                setFormData({ ...formData, password: changed })
              }
              value={formData.password}
            ></TextInput>
          </View>
          <View className="gap-3">
            <CustomButton
              title="Log In"
              className="bg-button_primary rounded-xl py-4 shadow-none"
              onPress={handleLogin}
            />
            <OAuth />
            <TouchableWithoutFeedback
              onPress={() => {
                router.replace("/(auth)/sign_up");
              }}
            >
              <View className="flex-row justify-center">
                <Text className="text-center text-text_primary mr-3">
                  Don't have an Account?
                </Text>
                <Text className="text-center text-button_primary">Sign Up</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
