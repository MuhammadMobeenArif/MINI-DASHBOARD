import { Link } from "react-router-dom";

function FullDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      {/* ------------------ SIDEBAR ------------------ */}
      <aside className="w-64 bg-[#0F1F3D] dark:bg-gray-800 text-gray-300 dark:text-gray-200 flex flex-col">
        <div className="p-6 text-xl font-semibold text-white dark:text-gray-100 border-b border-white/10">
          Admin Dashboard
        </div>

        <nav className="flex-1 mt-4 px-4 space-y-2">
          <p className="text-xs uppercase text-gray-400 dark:text-gray-500 tracking-wider mb-2">
            Menu
          </p>

          <Link to="/">
            <p className="block px-3 py-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700 cursor-pointer">
              Home
            </p>
          </Link>
          <Link to="/About">
            <p className="block px-3 py-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700 cursor-pointer">
              About
            </p>
          </Link>
          <Link to="/Component">
            <p className="block px-3 py-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700 cursor-pointer">
              Component
            </p>
          </Link>
        </nav>

        <div className="p-4 text-center text-xs text-gray-400 dark:text-gray-500">
          © 2025 Admin Dashboard
        </div>
      </aside>

      {/* ------------------ MAIN CONTENT AREA ------------------ */}
      <div className="flex-1 flex flex-col">
        {/* ------------------ TOP NAVBAR ------------------ */}
        <header className="bg-white dark:bg-gray-800 h-16 shadow flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pinimg.com/1200x/0c/a6/34/0ca634a45f128013c90d046719939766.jpg"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Muhammad Farooq
            </span>
          </div>
        </header>

        {/* ------------------ MAIN DASHBOARD ------------------ */}
        <main className="p-6 space-y-6">
          {/* TOP STAT CARDS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl shadow text-white bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-gray-700 dark:to-gray-900">
              <p className="text-sm opacity-80">Reports Generated</p>
              <h2 className="text-3xl font-bold">87.4</h2>
            </div>

            <div className="p-5 rounded-xl shadow text-white bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-600 dark:to-gray-800">
              <p className="text-sm opacity-80">Profiles</p>
              <h2 className="text-3xl font-bold">17.2k</h2>
            </div>

            <div className="p-5 rounded-xl shadow text-white bg-gradient-to-r from-green-500 to-emerald-500 dark:from-gray-600 dark:to-gray-800">
              <p className="text-sm opacity-80">Bugs Fixed</p>
              <h2 className="text-3xl font-bold">63.2k</h2>
            </div>

            <div className="p-5 rounded-xl shadow text-white bg-gradient-to-r from-red-400 to-pink-500 dark:from-gray-700 dark:to-gray-900">
              <p className="text-sm opacity-80">Total Views</p>
              <h2 className="text-3xl font-bold">45.8k</h2>
            </div>
          </section>

          {/* BOTTOM STAT BOXES */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Total Views
              </p>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-white">
                45.8k
              </h3>
              <div className="w-full h-24 bg-green-100 dark:bg-green-700 rounded-lg mt-3"></div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Reports Submitted
              </p>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-white">
                5.82k
              </h3>
              <div className="w-full h-24 bg-blue-100 dark:bg-blue-700 rounded-lg mt-3"></div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Active Social Profiles
              </p>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-white">
                4517.82
              </h3>
              <div className="w-full h-24 bg-purple-100 dark:bg-purple-700 rounded-lg mt-3"></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default FullDashboard;
