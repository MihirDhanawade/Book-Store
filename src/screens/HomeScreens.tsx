import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BookCard from "../components/BookCard";
import { deleteBookById, getListOfBooks } from "../api/http";
import AddButton from "../components/AddButton";
import AddBookScreen from "./AddBookScreen";

type Book = {
  id: string;
  cover: string;
  title: string;
  name_of_author: string;
  price_of_book: number;
};

const HomeScreens = () => {
  const [booklist, setBooklist] = useState<Book[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Book | null>(null);

  const getListOfBooksFN = () => {
    getListOfBooks({
      onSuccess: (books: Book[]) => setBooklist(books),
      onError: (err: any) => console.log(err),
    });
  };
  useEffect(() => {
    getListOfBooksFN();
  }, []);

  const onDeleteItem = (item: Book) => {
    deleteBookById({
      onSuccess: () => {
        getListOfBooksFN();
      },
      onError: (error: any) => console.log(error),
      itemID: item.id,
    });
  };

  const onEditItem = (item: Book) => {
    setModalVisible(true);
    setSelectedItem(item);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <FlatList
        data={booklist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookCard
            id={item.id}
            cover={item.cover}
            title={item.title}
            name_of_author={item.name_of_author}
            price_of_book={Number(item.price_of_book || 0)}
            onEditItem={() => onEditItem(item)}
            onDeleteItem={() => onDeleteItem(item)}
          />
        )}
      />
      <AddButton
        onPress={() => {
          setSelectedItem(null); // 🔥 CRITICAL FIX
          setModalVisible(true);
        }}
      />

      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen
          onClosePress={() => setModalVisible(false)}
          onCreateSuccess={() => getListOfBooksFN()}
          selectedItem={selectedItem}
        />
      </Modal>
    </SafeAreaView>
  );
};
export default HomeScreens;
