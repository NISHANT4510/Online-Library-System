
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import booksData from "../data/booksData";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books) || booksData;
  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return (
      <div className="p-10 text-center text-red-500 text-xl font-semibold">
        ❌ Book not found.
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto bg-white rounded-xl shadow-lg">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-auto object-cover shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-800">{book.title}</h1>
          <p className="text-xl text-gray-700">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-md text-white bg-blue-500 inline-block px-3 py-1 rounded-full font-semibold w-fit">
            {book.category}
          </p>

          <p className="text-gray-600 text-base leading-relaxed">{book.description}</p>

          <div className="text-amber-600 text-lg font-semibold">
            ⭐ {book.rating} / 5
          </div>

          <Link
            to="/books"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3 rounded-md transition"
          >
            ⬅ Back to Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
