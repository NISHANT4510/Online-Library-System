import { Link } from "react-router-dom";

const BookCard = ({ book }) => (
  <div className="border p-4 rounded shadow">
    <h3 className="text-lg font-semibold">{book.title}</h3>
    <p className="text-sm text-gray-600">by {book.author}</p>
    <Link to={`/book/${book.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
  </div>
);

export default BookCard;
