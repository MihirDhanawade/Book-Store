import axios from "axios";
import { Alert } from "react-native";

interface ApiProps {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  body?: any;
  itemID?: string | number;
}

const endpointUrl = "https://698f64cbdcc9a4df204a84b8.mockapi.io/books";

export const getListOfBooks = async ({ onSuccess, onError }: ApiProps) => {
  try {
    const response = await axios.get(endpointUrl);
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log("An error occured: ", error);
  }
};

export const getBookById = async ({ onSuccess, onError }: ApiProps) => {
  try {
    const response = await axios.get(endpointUrl + "/10");
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data);
  } catch (error) {
    console.log("An error occured: ", error);
    onError && onError(error);
  }
};

export const deleteBookById = async ({
  onSuccess,
  onError,
  itemID,
}: ApiProps) => {
  try {
    const response = await axios.delete(`${endpointUrl}/${itemID}`);
    Alert.alert("Books is Deleted Successfully: ");
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error);
  }
};

export const createBook = async ({ onSuccess, onError, body }: ApiProps) => {
  try {
    const response = await axios.post(endpointUrl, body);
    Alert.alert("Books Added Successfully: ");
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error);
  }
};

export const updateBook = async ({
  onSuccess,
  onError,
  body,
  itemID,
}: ApiProps) => {
  try {
    const response = await axios.put(`${endpointUrl}/${itemID}`, body);
    console.log("✅ UPDATE SUCCESS:", response.data);

    Alert.alert("Books Updated Successfully: ");
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error);
  }
};
