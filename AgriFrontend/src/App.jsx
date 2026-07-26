import { useState } from 'react'
import "./index.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function validate() {
    if (email.trim() === "") {
      setError("Email is required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (password.trim() === "") {
      setError("Password is required.");
      return false;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return false;
    }

    setError("");
    return true;
  }

  function login() {
    if (!validate()) return;

    setLoading(true);

    axios.post("http://localhost:5002/login", {email: email, password: password})
      .then(function (response) {
        setLoading(false);

        if (response.data === true) {
          navigate("/dashboard");
        } else {
    navigate("/fail");
        }
      })
      .catch(function () {
        setLoading(false);
        setError("Unable to connect to server.");
      });
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 via-lime-50 to-yellow-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        {/* Logo */}
        <div className="text-center">
          <div className="text-6xl">🌿</div>

          <h1 className="text-4xl font-bold text-green-700 mt-2">
            AgriVerse
          </h1>

          <p className="text-gray-500 mt-2">
            Smart Agriculture Management
          </p>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-2">
            Login to continue
          </p>
        </div>

        {/* Email */}
        <div className="mt-8">
          <label className="font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="farmer@agriverse.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="font-medium">
            Password
          </label>

          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-xl pr-16 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-sm text-green-700 font-medium"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-600 text-sm mt-4 text-center">
            {error}
          </p>
        )}

        {/* Login Button */}
        <button
          onClick={login}
          disabled={loading}
          className="w-full mt-8 bg-green-600 hover:bg-green-700 transition text-white font-semibold p-3 rounded-xl disabled:bg-green-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          🌱 Empowering Farmers Through Technology
        </div>
      </div>
    </div>
  );
}

export default App
