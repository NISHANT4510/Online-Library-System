
import { createSlice } from "@reduxjs/toolkit";
import defaultBooks from "../data/booksData";

const loadBooks = () => {
  const saved = localStorage.getItem("books");
  return saved ? JSON.parse(saved) : defaultBooks;
};

const saveBooks = (books) => {
  localStorage.setItem("books", JSON.stringify(books));
};

const booksSlice = createSlice({
  name: "books",
  initialState: loadBooks(),
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
      saveBooks(state); // Save updated list to localStorage
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
