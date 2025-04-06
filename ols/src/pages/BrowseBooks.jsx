import React, { useState } from "react";
import booksData from "../data/booksData";
import { Link } from "react-router-dom";

// Extract unique categories
const categories = [...new Set(booksData.map(book => book.category))];

const BrowseBooks = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter logic
  const filteredBooks = booksData.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Browse Books</h2>

      {/* 🔍 Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* 🏷️ Category Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-3 py-1 rounded-full border ${
            selectedCategory === "All" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full border ${
              selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 📚 Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition"
            >
              <img src={book.image} alt={book.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
                <p className="text-sm text-gray-500">Category: {book.category}</p>
                <p className="text-sm text-yellow-600">Rating: ⭐ {book.rating}</p>
                <Link
                  to={`/book/${book.id}`}
                  className="text-blue-500 hover:underline text-sm mt-2 inline-block"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
