// // src/redux/bookSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const bookSlice = createSlice({
//   name: "books",
//   initialState: [],
//   reducers: {
//     addBook: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });

// export const { addBook } = bookSlice.actions;
// export default bookSlice.reducer;
// src/redux/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';
import booksData from '../data/booksData';

const booksSlice = createSlice({
  name: 'books',
  initialState: booksData,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
