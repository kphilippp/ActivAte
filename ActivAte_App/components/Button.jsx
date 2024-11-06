import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../assets/colors";

function Button({ text, height, color, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { height: height, backgroundColor: color }]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  text: {
    color: colors.text_primary,
    fontWeight: "bold",
  },
});

export default Button;
