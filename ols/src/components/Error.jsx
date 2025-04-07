import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">Oops! The page you’re looking for doesn't exist.</p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default Error;
