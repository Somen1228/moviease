import React, { Suspense, lazy } from "react";
import "./App.css";
import "antd/dist/reset.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./hoc/ProtectedRoute";
import { Spin } from "antd";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";

// Lazy load for less critical or larger components
const Register = lazy(() => import("./pages/Register/index.jsx"));
const ForgetPassword = lazy(() => import("./pages/ForgetPassword"));
const ResetPasswordPage = lazy(() => import("./pages/Reset/index.jsx"));
const SingleMovie = lazy(() => import("./pages/SingleMovie/index.jsx"));
const BookShowPage = lazy(() => import("./pages/BookShow/index.jsx"));
const BookedShows = lazy(() => import("./pages/AllBookedShows.jsx/index.jsx"));

export const API_URL = import.meta.env.VITE_API_URL;

const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Spin size="large" />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget" element={<ForgetPassword />} />
            <Route path="/reset" element={<ResetPasswordPage />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bookedShows"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <BookedShows />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movie/:id"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <SingleMovie />
                </ProtectedRoute>
              }
            />
            <Route
              path="/book-show/:id"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <BookShowPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
