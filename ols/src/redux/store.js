// // src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './booksSlice';

// const store = configureStore({
//   reducer: {
//     books: booksReducer,
//   },
// });

// export default store;


// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
