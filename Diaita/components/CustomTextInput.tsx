import {
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const CustomInputField = ({ label, labelStyles }) => (
  <KeyboardAvoidingView>
    <TouchableWithoutFeedback>
      <View className="my-2 w-full">
        <Text className={`text-lg mb-3 ${labelStyles}`}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default CustomInputField;
