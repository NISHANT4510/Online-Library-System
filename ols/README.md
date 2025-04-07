# 📚 Online Library Management System

A fully functional web-based Library Management System built using **React**, **Redux**, and **React Router**. This app allows users to browse books, view detailed information, and add new books in real time using `localStorage`.

---

## 🌐 Live Demo

🔗 [Click here to view the live app](https://online-library-system-bhgc.vercel.app/)

---

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

```text
src/
├── assets/                # Static assets like logos or images
│   └── react.svg          # React logo used in the app
├── components/            # Reusable React components
│   ├── Navbar.jsx         # Navigation bar for routing between pages
│   ├── BookSearchBar.jsx  # Search bar for finding books (optional)
│   └── Error.jsx          # 404 Error page
├── data/                  # Static/mock data
│   ├── booksData.js       # Initial array of book objects
│   └── categories.js      # Book categories list
├── Layout/
│   └── MainLayout.jsx     # Layout wrapper with shared components (e.g., Navbar)
├── pages/                 # Application pages
│   ├── Home.jsx           # Home page with categories and popular books
│   ├── BrowseBooks.jsx    # Browse/search books
│   ├── BookDetails.jsx    # Detailed view of a single book
│   └── AddBook.jsx        # Form to add books (Redux/localStorage)
├── redux/                 # Redux slice/store
│   ├── booksSlice.js      # Book state slice
│   └── store.js           # Redux config
├── routes/
│   └── AppRouter.jsx      # Route definitions
├── App.jsx                # Root component
├── index.css              # Global styles
└── main.jsx               # Entry point


📥 Installation & Usage
Follow these steps to run the project locally:

1. Clone the Repository
git clone https://github.com/your-username/library-management-system.git
cd library-management-system


2. Install Dependencies
npm install

3. Start Development Server
npm run dev

