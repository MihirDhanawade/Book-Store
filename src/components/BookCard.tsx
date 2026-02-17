import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface BookCardProps {
  id: string;
  cover: string;
  title: string;
  name_of_author: string;
  price_of_book: number;
  onDeleteItem?: () => void;
  onEditItem?: () => void;
}

const BookCard = ({
  id,
  cover,
  title,
  name_of_author,
  price_of_book,
  onDeleteItem,
  onEditItem,
}: BookCardProps) => {
  return (
    <View style={styles.container}>
      {/* Image section */}
      <Image
        source={{
          uri: cover,
        }}
        style={styles.Image}
      />

      {/* Details Section */}
      <View style={styles.details}>
        <Text style={styles.bookname}>{title}</Text>
        <Text style={styles.Authorname}>{name_of_author}</Text>
        <Text style={styles.Price}>₹{price_of_book}</Text>
      </View>
      {/* Delete and Edit section */}
      <View style={styles.delEditContainer}>
        <TouchableOpacity style={styles.circleButton} onPress={onDeleteItem}>
          <MaterialIcons name="delete-outline" size={20} color="red" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.circleButton} onPress={onEditItem}>
          <AntDesign name="edit" size={20} color="#25a" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  Image: {
    height: 120,
    width: 80,
    borderRadius: 8,
    resizeMode: "stretch",
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  bookname: {
    fontSize: s(12),
    fontWeight: "bold",
    color: "#000",
  },
  Authorname: {
    fontSize: s(14),
    color: "#888",
    marginTop: vs(10),
  },
  Price: {
    fontSize: s(14),
    fontWeight: "bold",
    color: "#25a",
    marginTop: vs(10),
  },
  delEditContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleButton: {
    height: 35,
    width: 35,
    borderRadius: 15,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginStart: 10,
  },
});
export default BookCard;
