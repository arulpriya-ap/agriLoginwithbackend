import "./index.css"

import { useNavigate } from "react-router-dom";

function Fail() {
  const navigate = useNavigate();

  function goToLogin() {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-red-100 via-orange-50 to-yellow-50 flex justify-center items-center px-4">

      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">

        {/* Error Icon */}
        <div className="text-7xl mb-4">
          ❌
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-red-600">
          Login Failed
        </h1>

        {/* Message */}
        <p className="text-gray-600 mt-4">
          Invalid email or password.
        </p>

        <p className="text-gray-500 mt-2">
          Please check your credentials and try again.
        </p>

        {/* Button */}
        <button
          onClick={goToLogin}
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Back to Login
        </button>

      </div>

    </div>
  );
}

export default Fail;