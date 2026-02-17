# 📚 Book Manager App

A React Native mobile application for managing a personal book collection. Built with **Expo**, it supports full CRUD operations (Create, Read, Update, Delete) using a RESTful mock API.

---

## ✨ Features

- 📖 **Browse Books** — View all books in a clean, scrollable card list
- ➕ **Add Books** — Add new books with title, author, cover image, and price
- ✏️ **Edit Books** — Update any existing book's details via a modal form
- 🗑️ **Delete Books** — Remove books from the list with a single tap
- 🌐 **Live API Integration** — All data is persisted via a REST API (MockAPI)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React Native | Mobile UI framework |
| Expo | Development toolchain |
| TypeScript | Type safety |
| Axios | HTTP client |
| React Native Safe Area Context | Safe area handling |
| Expo Vector Icons (AntDesign, MaterialIcons, Ionicons) | UI Icons |
| react-native-size-matters | Responsive sizing |

---

## 📁 Project Structure

```
├── api/
│   └── http.ts              # All API calls (GET, POST, PUT, DELETE)
├── components/
│   ├── AppButton.tsx         # Reusable Save button
│   ├── AppTextInput.tsx      # Reusable styled text input
│   ├── BookCard.tsx          # Book list item card with edit/delete actions
│   └── AddButton.tsx         # Floating "+" action button
└── screens/
    ├── HomeScreens.tsx        # Main screen with book list and modal
    └── AddBookScreen.tsx      # Add / Edit book form screen
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A physical device or emulator (Android/iOS)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/book-manager-app.git
   cd book-manager-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Scan the QR code with the **Expo Go** app (Android/iOS)
   - Or press `a` for Android emulator / `i` for iOS simulator

---

## 📡 API Reference

The app uses [MockAPI](https://mockapi.io/) as the backend. All endpoints are based on:

```
https://698f64cbdcc9a4df204a84b8.mockapi.io/books
```

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/books` | Fetch all books |
| `GET` | `/books/:id` | Fetch a single book |
| `POST` | `/books` | Create a new book |
| `PUT` | `/books/:id` | Update an existing book |
| `DELETE` | `/books/:id` | Delete a book |

### Book Object Schema

```json
{
  "id": "1",
  "title": "The Great Gatsby",
  "name_of_author": "F. Scott Fitzgerald",
  "price_of_book": 299,
  "cover": "https://example.com/cover.jpg"
}
```

---

## 📱 Screenshots

> _Add screenshots of your app here_

| Home Screen | Add Book | Edit Book |
|---|---|---|
| ![Home](./assets/home.png) | ![Add](./assets/add.png) | ![Edit](./assets/edit.png) |

---

## 🔧 Key Components

### `BookCard`
Displays a single book with its cover image, title, author, and price. Includes **Delete** and **Edit** action buttons.

### `AddBookScreen`
A modal form used for both **creating** and **editing** books. It detects whether a `selectedItem` is passed in — if so, it switches to edit mode and pre-fills the form.

### `HomeScreens`
The main screen. Manages app state, handles API calls, and controls the modal visibility. Passes the selected book item into `AddBookScreen` when editing.

### `http.ts`
Centralizes all API logic using Axios. Each function accepts `onSuccess` and `onError` callbacks, keeping UI and network logic cleanly separated.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.
