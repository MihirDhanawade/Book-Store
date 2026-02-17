import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";

interface AppTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: TextInputProps["keyboardType"];
}

const AppTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  ...otherProps
}: AppTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{ color: "#9f9c9c", fontSize: 12 }}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...otherProps}
      ></TextInput>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAF4EF",
    width: "100%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 8,
    marginBottom: 20,
  },
});
