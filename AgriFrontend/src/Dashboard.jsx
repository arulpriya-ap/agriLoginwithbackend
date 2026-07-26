import "./index.css"

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 via-lime-50 to-yellow-50">

      {/* Header */}
      <header className="bg-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">🌿 AgriVerse</h1>
            <p className="text-green-100 text-sm">
              Smart Agriculture Management System
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-white text-green-700 px-5 py-2 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            Logout
          </button>

        </div>
      </header>

      {/* Welcome */}
      <div className="max-w-7xl mx-auto px-6 mt-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-3xl font-bold text-green-700">
            Welcome Farmer 👨‍🌾
          </h2>

          <p className="text-gray-600 mt-2">
            Here's an overview of today's farm activities.
          </p>

        </div>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Weather */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

          <div className="text-5xl text-center">☀️</div>

          <h3 className="text-xl font-bold text-center mt-4">
            Weather
          </h3>

          <p className="text-center text-gray-600 mt-2">
            Sunny
          </p>

          <p className="text-center text-3xl font-bold text-green-700 mt-2">
            31°C
          </p>

        </div>

        {/* Crop */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

          <div className="text-5xl text-center">🌾</div>

          <h3 className="text-xl font-bold text-center mt-4">
            Crop Status
          </h3>

          <p className="text-center text-green-600 font-semibold mt-3">
            Healthy
          </p>

          <p className="text-center text-gray-500 mt-2">
            Rice Crop
          </p>

        </div>

        {/* Irrigation */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

          <div className="text-5xl text-center">💧</div>

          <h3 className="text-xl font-bold text-center mt-4">
            Irrigation
          </h3>

          <p className="text-center text-blue-600 font-semibold mt-3">
            Completed
          </p>

          <p className="text-center text-gray-500 mt-2">
            Today's Watering
          </p>

        </div>

        {/* Alerts */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

          <div className="text-5xl text-center">🔔</div>

          <h3 className="text-xl font-bold text-center mt-4">
            Alerts
          </h3>

          <p className="text-center text-orange-600 font-semibold mt-3">
            2 Notifications
          </p>

          <p className="text-center text-gray-500 mt-2">
            Check Updates
          </p>

        </div>

      </div>

      {/* Today's Tasks */}
      <div className="max-w-7xl mx-auto px-6 mt-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-green-700 mb-6">
            🌱 Today's Tasks
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-green-50 rounded-xl p-4">
              ✅ Water the crops
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              ✅ Apply fertilizer
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              ✅ Check soil moisture
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              ✅ Monitor pests
            </div>

          </div>

        </div>

      </div>

      {/* Farm Statistics */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pb-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-green-700 mb-6">
            📊 Farm Statistics
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-green-100 rounded-xl p-6 text-center">

              <h3 className="text-4xl font-bold text-green-700">
                24
              </h3>

              <p className="mt-2 text-gray-700">
                Acres Cultivated
              </p>

            </div>

            <div className="bg-green-100 rounded-xl p-6 text-center">

              <h3 className="text-4xl font-bold text-green-700">
                92%
              </h3>

              <p className="mt-2 text-gray-700">
                Crop Health
              </p>

            </div>

            <div className="bg-green-100 rounded-xl p-6 text-center">

              <h3 className="text-4xl font-bold text-green-700">
                18
              </h3>

              <p className="mt-2 text-gray-700">
                Tasks Completed
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;