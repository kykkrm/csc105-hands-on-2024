import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    navigate("/"); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleLogin}>
          {/* Email */}
          <label className="block font-semibold mb-1">Email</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          <p className="text-red-500 text-s mt-1">Invalid email address</p>

          {/* Password */}
          <label className="block font-semibold mb-1">Password</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            type="password"
            placeholder="Enter your password"
          />
          <p className="text-red-500 text-s mt-1">
            Password must be at least 6 characters long
          </p>

          {/* Login */}
          <button
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700 transition"
            type="submit"
          >
            Login
          </button>

          {/* Signup */}
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <a className="text-blue-600 underline" href="/signup">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
