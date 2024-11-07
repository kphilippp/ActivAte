import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import _colors from "@/assets/colors";
import CustomButton from "@/components/Button";
import { router } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

const ProfileConfigureScreen = () => {
  const [calorieGoal, setCalorieGoal] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

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
            <TextInput
              style={styles.input}
              placeholder="Calorie Goal"
              onChangeText={setCalorieGoal}
              placeholderTextColor={_colors.input_placeholder}
              value={calorieGoal}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Current Weight"
              onChangeText={setCurrentWeight}
              placeholderTextColor={_colors.input_placeholder}
              value={currentWeight}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Goal Weight"
              onChangeText={setGoalWeight}
              placeholderTextColor={_colors.input_placeholder}
              value={goalWeight}
            ></TextInput>
          </View>
          <View style={{ gap: 10 }}>
            <CustomButton
              text="Sign Up"
              h={60}
              w={"100%"}
              color={_colors.button_primary}
              onPress={() => {
                router.push("/(auth)/profile_configure2");
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
    paddingBottom: "40%",
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
  input: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: _colors.input_background,
    color: _colors.text_primary,
  },
});
