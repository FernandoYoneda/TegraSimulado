import React from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./page/Products";
import Cart from "./page/Cart";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  { path: "/", element: <Products /> },
  { path: "/carrinho", element: <Cart /> },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
