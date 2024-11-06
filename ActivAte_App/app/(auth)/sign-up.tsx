import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../../assets/colors";
import CustomButton from "../../components/Button.jsx";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TextInput
                style={styles.inputName}
                placeholder="First Name"
                onChangeText={setFirstName}
                placeholderTextColor={colors.input_placeholder}
                value={firstName}
              ></TextInput>
              <TextInput
                style={styles.inputName}
                placeholder="Last Name"
                onChangeText={setLastName}
                placeholderTextColor={colors.input_placeholder}
                value={lastName}
              ></TextInput>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Birthday"
              onChangeText={setBirthday}
              placeholderTextColor={colors.input_placeholder}
              value={birthday}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={setEmail}
              placeholderTextColor={colors.input_placeholder}
              value={email}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
              placeholderTextColor={colors.input_placeholder}
              value={password}
            ></TextInput>
          </View>
          <View style={{ gap: 10 }}>
            <CustomButton
              text="Login"
              h={60}
              w={"100%"}
              color={colors.button_secondary}
            />
            <CustomButton
              text="Sign Up"
              h={60}
              w={"100%"}
              color={colors.button_primary}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: colors.login_main,
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
    color: colors.text_primary,
    fontWeight: "bold",
    fontSize: 60,

    lineHeight: 55,
  },
  caption: {
    color: colors.text_primary,

    fontSize: 20,
  },
  input: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: colors.input_background,
    color: colors.text_primary,
  },
  inputName: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: colors.input_background,
    color: colors.text_primary,
    flex: 1,
  },
});

export default SignUpScreen;
