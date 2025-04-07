# 📚 Online Library Management System

A fully functional web-based Library Management System built using **React**, **Redux**, and **React Router**. This app allows users to browse books, view detailed information, and add new books in real time using localStorage.

---

## 🌐 Live Demo

🔗 [Click here to view the live app](https://your-live-demo-link.com)


## 🚀 Features

- 🏠 **Home Page** – Simple and welcoming introduction.
- 🔍 **Browse Books** – Filter by category and search by title or author.
- 📖 **Book Details** – View full info including description, image, rating.
- ➕ **Add Book** – Add new books with validation and instant update.
- ⚠️ **Error Page** – 404 page with a link to Home.
- 💾 **Data Persistence** – Uses `localStorage` to retain added books.

---

## 🛠️ Tech Stack

- **React** – Frontend UI library.
- **Redux** – State management for handling book data.
- **React Router DOM** – Routing between pages.
- **Tailwind CSS** – For fast and responsive UI design.
- **localStorage** – For storing user-added book data.

---

## 📂 Project Structure

src/
├── assets/                          # Static assets like logos or images
│   └── react.svg                    # React logo used in the app

├── components/                      # Reusable React components
│   ├── Navbar.jsx                   # Navigation bar for routing between pages
│   ├── BookSearchBar.jsx            # Search bar for finding books (optional/component stub)
│   └── Error.jsx                    # 404 Error page for invalid routes

├── data/                            # Static or mock data used in the app
│   ├── booksData.js                 # Initial array of book objects
│   └── categories.js                # List of book categories

├── Layout/
│   └── MainLayout.jsx              # Layout wrapper with shared components (e.g., Navbar)

├── pages/                           # Application pages
│   ├── Home.jsx                     # Home page with categories and popular books
│   ├── BrowseBooks.jsx             # Browse books by category or search
│   ├── BookDetails.jsx             # Detailed view of a single book
│   └── AddBook.jsx                 # Form to add a new book (with Redux/localStorage)

├── redux/                           # Redux store and slices
│   ├── booksSlice.js               # Slice for managing books state
│   └── store.js                    # Redux store configuration

├── routes/
│   └── AppRouter.jsx               # Route definitions using React Router

├── App.jsx                         # Root App component
├── index.css                       # Global styles
├── main.jsx                        # Application entry point


## 📥 Installation

Follow these steps to get the project running locally:

1. **Clone the repository:**

git clone https://github.com/your-username/library-management-system.git

cd library-management-system

npm install

npm run dev
