import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

interface AddButtonProps {
  onPress: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="plus" size={50} color="#fff" />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    height: 70,
    width: 70,
    backgroundColor: "#1273DE",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: Platform.OS === "android" ? 30 : 0,
    zIndex: 100, // Keep it above list
    elevation: 10,
  },
});
