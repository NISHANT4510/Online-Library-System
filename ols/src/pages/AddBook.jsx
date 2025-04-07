// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addBook } from "../redux/booksSlice"; // ✅ Correct file name
// import { useState } from "react";

// const AddBook = () => {
//   const [form, setForm] = useState({
//     title: "",
//     author: "",
//     description: "",
//     category: "",
//     image: "",
//     rating: "",
//   });

//   const [errors, setErrors] = useState({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const validate = () => {
//     const err = {};
//     Object.entries(form).forEach(([key, value]) => {
//       if (!value) err[key] = "Required";
//     });
//     if (form.rating && (form.rating < 0 || form.rating > 5)) {
//       err.rating = "Rating must be between 0 and 5";
//     }
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     const newBook = {
//       ...form,
//       id: Date.now(), // Unique ID
//     };

//     dispatch(addBook(newBook));
//     navigate("/books"); // Redirect to Browse
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-4">➕ Add a New Book</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {["title", "author", "description", "category", "image", "rating"].map((field) => (
//           <div key={field}>
//             <label className="block font-semibold capitalize">{field}</label>
//             <input
//               type={field === "rating" ? "number" : "text"}
//               name={field}
//               value={form[field]}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder={`Enter ${field}`}
//             />
//             {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
//           </div>
//         ))}

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBook;



// src/pages/AddBook.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    rating: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      ...formData,
      id: Date.now(), // unique id
      rating: parseFloat(formData.rating), // ensure it's a number
    };

    dispatch(addBook(newBook)); // ✅ ADD TO REDUX
    navigate("/books"); // ✅ REDIRECT
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
