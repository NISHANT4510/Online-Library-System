import { useParams, Link } from "react-router-dom";
import books from "../data/booksData";

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return (
      <div className="p-10 text-center text-red-500 text-xl font-semibold">
        ❌ Book not found.
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto bg-white shadow-xl rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <img
          src={book.image}
          alt={book.title}
          className="rounded-lg w-full h-auto shadow-md"
        />

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
          <p className="text-lg text-gray-600 mb-1">
            <span className="font-semibold text-gray-700">Author:</span> {book.author}
          </p>
          <p className="text-md text-blue-600 font-medium mb-4">
            Category: {book.category}
          </p>

          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            {book.description}
          </p>

          <div className="text-yellow-600 font-semibold text-lg mb-6">
            ⭐ Rating: {book.rating}
          </div>

          <Link
            to="/books"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            ⬅ Back to Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
