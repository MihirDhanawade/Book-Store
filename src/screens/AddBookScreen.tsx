import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { createBook, updateBook } from "../api/http";

type Book = {
  id: string;
  cover: string;
  title: string;
  name_of_author: string;
  price_of_book: number;
};

interface AddBookScreenProps {
  onClosePress: () => void;
  onCreateSuccess: () => void;
  selectedItem: Book | null;
}

const AddBookScreen: React.FC<AddBookScreenProps> = ({
  onClosePress,
  onCreateSuccess,
  selectedItem,
}) => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [coverURL, setCoverURL] = useState("");
  const [price, setPrice] = useState("");

  // Load selected item into form
  useEffect(() => {
    if (selectedItem) {
      setBookName(selectedItem.title ?? "");
      setAuthorName(selectedItem.name_of_author ?? "");
      setCoverURL(selectedItem.cover ?? "");
      setPrice(String(selectedItem.price_of_book ?? ""));
    } else {
      setBookName("");
      setAuthorName("");
      setCoverURL("");
      setPrice("");
    }
  }, [selectedItem]);

  // ADD NEW BOOK
  const createNewBook = () => {
    const parsedPrice = parseFloat(price);
    const safePrice = isNaN(parsedPrice) ? 0 : parsedPrice;

    createBook({
      body: {
        title: bookName,
        name_of_author: authorName,
        price_of_book: safePrice,
        cover: coverURL,
      },
      onSuccess: () => {
        onClosePress(); // ← close the modal
        onCreateSuccess(); // ← refresh the list
      },
      onError: () => {
        Alert.alert("Error happened");
      },
    });
  };

  // UPDATE EXISTING BOOK
  const updateBookFn = () => {
    if (!selectedItem?.id) return;

    const parsedPrice = parseFloat(price);
    const safePrice = isNaN(parsedPrice) ? 0 : parsedPrice;

    updateBook({
      body: {
        title: bookName,
        name_of_author: authorName,
        price_of_book: safePrice,
        cover: coverURL,
      },
      itemID: selectedItem.id,
      onSuccess: () => {
        onClosePress();
        onCreateSuccess();
      },
      onError: () => Alert.alert("Error updating book"),
    });
  };

  return (
    <SafeAreaView>
      <Ionicons
        name="close-circle"
        size={30}
        color="#E81D1D"
        onPress={onClosePress}
      />

      <View style={styles.body}>
        <Text style={styles.title}>
          {selectedItem?.id ? "Edit Book" : "Add New Book"}
        </Text>

        <AppTextInput
          value={bookName}
          onChangeText={setBookName}
          placeholder={"Book name"}
        />
        <AppTextInput
          value={authorName}
          onChangeText={setAuthorName}
          placeholder={"Author name"}
        />
        <AppTextInput
          value={coverURL}
          onChangeText={setCoverURL}
          placeholder={"Cover Image"}
        />
        <AppTextInput
          value={price}
          onChangeText={setPrice}
          placeholder={"Book Price"}
          keyboardType={"numeric"}
        />

        {/* ADD or UPDATE based on selected item */}
        <AppButton onPress={selectedItem?.id ? updateBookFn : createNewBook} />
      </View>
    </SafeAreaView>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
});
