import React from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./page/ProductsPage";
import CartPage from "./page/CartPage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  { path: "/", element: <ProductsPage /> },
  { path: "/carrinho", element: <CartPage /> },
  { path: "/cadastro", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
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
