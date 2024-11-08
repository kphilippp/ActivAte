import React from "react";
import { TouchableOpacity, Text } from "react-native";

function CustomButton({ text, className, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} className={className}>
      <Text className={`text-white text-center`}>{text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
