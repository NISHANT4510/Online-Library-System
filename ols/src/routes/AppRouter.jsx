// src/router/AppRouter.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import BrowseBooks from "../pages/BrowseBooks";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/books", element: <BrowseBooks /> },
      { path: "/books/:category", element: <BrowseBooks /> },
      { path: "/book/:id", element: <BookDetails /> },
      { path: "/add-book", element: <AddBook /> },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
