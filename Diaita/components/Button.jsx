import React from "react";
import { TouchableOpacity, Text } from "react-native";

function CustomButton({ text, buttonClass, textClass, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} className={buttonClass}>
      <Text className={textClass}>{text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
