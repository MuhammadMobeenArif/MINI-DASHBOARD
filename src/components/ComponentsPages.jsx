import { Link } from "react-router-dom";

function ComponentsPage() {
  return (
    <div className="p-6 space-y-6 h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      {/* BACK TO HOME */}
      <Link to="/">
        <h1 className="m-5 font-semibold hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
          Back To Home
        </h1>
      </Link>

      {/* SECTION 2 — STATS CARDS */}
      <div className="px-2 py-4">
        <h1 className="my-4 text-4xl font-bold">Component Page</h1>
        <p className="text-lg mt-3 text-gray-100">
          This page showcases reusable UI components such as cards, buttons, and
          input fields used throughout the dashboard.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl text-white shadow bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-gray-700 dark:to-gray-900">
          <p className="text-sm text-white/80">Users</p>
          <h3 className="text-3xl font-bold">12.4k</h3>
        </div>

        <div className="p-5 rounded-xl text-white shadow bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-600 dark:to-gray-800">
          <p className="text-sm text-white/80">Reports</p>
          <h3 className="text-3xl font-bold">5.9k</h3>
        </div>

        <div className="p-5 rounded-xl text-white shadow bg-gradient-to-r from-green-500 to-emerald-500 dark:from-gray-600 dark:to-gray-800">
          <p className="text-sm text-white/80">Messages</p>
          <h3 className="text-3xl font-bold">23.1k</h3>
        </div>
      </div>

      {/* SECTION 3 — BUTTONS SHOWCASE */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Buttons
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
          A few commonly used buttons inside the dashboard.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-900 shadow hover:bg-blue-700 dark:hover:bg-blue-600">
            Primary
          </button>

          <button className="px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white dark:text-gray-900 shadow hover:bg-purple-700 dark:hover:bg-purple-600">
            Secondary
          </button>

          <button className="px-4 py-2 rounded-lg bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 shadow hover:bg-green-700 dark:hover:bg-green-600">
            Success
          </button>

          <button className="px-4 py-2 rounded-lg bg-red-600 dark:bg-red-500 text-white dark:text-gray-900 shadow hover:bg-red-700 dark:hover:bg-red-600">
            Danger
          </button>
        </div>
      </div>

      {/* INPUT FIELD */}
    </div>
  );
}

export default ComponentsPage;
