import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../Layout/Layout";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";
import SignupPage from "../pages/SignupPage";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFoundPage from "../components/NotFound";
import UserProfile from "../components/UserProfile";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/product/:id", element: <ProductPage /> },
      {path:"/profile",element :<UserProfile/>},
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default routes;
