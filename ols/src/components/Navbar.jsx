import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">Online Library</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/books/">Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </div>
  </nav>
);

export default Navbar;
