// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./redux/store"; // Your Redux store file
// import AppRouter from "./routes/AppRouter";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AppRouter />
//     </Provider>
//   </React.StrictMode>
// );


// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
