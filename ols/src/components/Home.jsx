import { Link } from "react-router-dom";
import books from "../data/booksData";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

const Home = () => {
  // Get top 5 books based on rating
  const popularBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📚 Welcome to the Online Library</h1>

      {/* 🔖 Book Categories */}
      <h2 className="text-xl font-semibold mb-2">Book Categories:</h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <Link
            to={`/books/${category}`}
            key={category}
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-md shadow-sm"
          >
            {category}
          </Link>
        ))}
      </div>

      {/* 🌟 Popular Books */}
      <h2 className="text-xl font-semibold mb-2">🔥 Popular Books:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularBooks.map((book) => (
          <div key={book.id} className="bg-white border p-4 rounded-lg shadow hover:shadow-md transition">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <p className="text-sm text-yellow-600 font-medium">⭐ {book.rating}</p>
            <p className="text-sm text-blue-500">{book.category}</p>
            <Link
              to={`/book/${book.id}`}
              className="text-sm text-blue-600 underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
