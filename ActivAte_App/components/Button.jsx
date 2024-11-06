import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../assets/colors";

function CustomButton({ text, h, w, color, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { height: h, width: w, backgroundColor: color }]}
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

export default CustomButton;
