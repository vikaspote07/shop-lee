import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Default credentials
  const defaultEmail = "admin";
  const defaultPassword = "admin123";

  const handleLogin = () => {
    // Check against default credentials
    if (email === defaultEmail && password === defaultPassword) {
      // Simulate user data
      const userData = { email, role: "admin" };
      dispatch(login(userData));
      toast.success("log in succesful");
      navigate("/checkout");
    } else {
      console.error("Login failed: Invalid credentials");
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
        <Link to="/signup">
          <small className="color-blue">
            Don't have an account? Create an account
          </small>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
