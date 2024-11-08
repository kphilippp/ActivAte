import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  text: string; // The button's text
  buttonClass?: string; // Optional button class
  textClass?: string; // Optional text class
  onPress?: () => void; // onPress handler
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  buttonClass,
  textClass,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} className={buttonClass}>
      <Text className={textClass}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
