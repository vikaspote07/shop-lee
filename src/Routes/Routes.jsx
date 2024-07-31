// src/routes.js
import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFoundPage from "../components/NotFound";
import LoadingSpinner from "../components/loading spinner/LoadingSpinner ";

const HomePage = lazy(() => import("../pages/HomePage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const UserProfile = lazy(() => import("../components/UserProfile"));
const PaymentPage = lazy(() => import("../pages/PaymentPage"));
const OrderSuccessPage = lazy(() => import("../pages/OrderSuccesPage"));

let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        ),
      },

      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <UserProfile />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "/payment",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PaymentPage />
          </Suspense>
        ),
      },
      {
        path: "/order-success",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <OrderSuccessPage />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<LoadingSpinner />}>
              <CheckoutPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SignupPage />
          </Suspense>
        ),
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default routes;
