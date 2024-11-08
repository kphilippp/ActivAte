import CustomButton from "../../components/Button";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { router } from "expo-router";

const SignInScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    router.replace("/(root)/explore");
  };

  return (
    <SafeAreaView className="flex-1 bg-login_main ">
      <View className="flex-1 justify-between px-16 py-36">
        <View className="mb-16">
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
              text="Log In"
              buttonClass="flex-stretch bg-button_primary rounded-lg py-5"
              textClass="text-center text-text_primary"
              onPress={() => {
                handleLogin();
              }}
            />
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
