import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      {/* BACK TO HOME */}
      <Link to="/">
        <h1 className="p-5 font-semibold hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
          Back To Home
        </h1>
      </Link>

      <div className="p-6 space-y-6 shadow-2xl bg-gray-800 dark:bg-gray-800 rounded-xl transition-all">
        {/* PAGE TITLE */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            About Us
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
            {/* Learn more about our dashboard, mission and team. */}
            This dashboard project is created by Muhammad Farooq, a frontend
            developer passionate about building modern and interactive UIs.
          </p>
        </div>

        {/* TEAM SECTION */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-all">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Our Team
          </h2>

          <div className="mt-4 flex items-center gap-4 mb-4">
            <img
              src="https://i.pinimg.com/1200x/0c/a6/34/0ca634a45f128013c90d046719939766.jpg"
              className="w-14 h-14 rounded-full shadow"
            />
            <div>
              <h3 className="text-gray-800 dark:text-gray-100 font-semibold">
                Muhammad Farooq
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Frontend Developer
              </p>
            </div>
          </div>

          {/* 3 INFO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-gray-700 dark:to-gray-900 text-white rounded-xl shadow transition-all">
              <h3 className="text-lg font-bold">Our Mission</h3>
              <p className="text-white/80 mt-2 text-sm">
                To create fast, modern, and user-friendly dashboards that help
                users manage data effortlessly.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-600 dark:to-gray-800 text-white rounded-xl shadow transition-all">
              <h3 className="text-lg font-bold">Our Vision</h3>
              <p className="text-white/80 mt-2 text-sm">
                To deliver a seamless data experience through clean design and
                powerful UI components.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500 to-emerald-500 dark:from-gray-600 dark:to-gray-800 text-white rounded-xl shadow transition-all">
              <h3 className="text-lg font-bold">Our Values</h3>
              <p className="text-white/80 mt-2 text-sm">
                Quality UI • Performance Focus • Simple Workflows • Modern
                Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
