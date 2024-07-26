import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{ width: "300px" }}
      className="h-full flex-col bg-white text-white shadow-lg hidden md:flex"
    >
      <div className="flex flex-col justify-between flex-grow p-4">
        <nav className="flex flex-col space-y-2">
          <Link
            to="/admin/dashboard"
            className="flex items-center p-2 text-[#3f9997] font-medium hover:bg-[#3f9997] hover:text-white rounded-md"
          >
            <svg
              className="w-6 h-6 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18v18H3V3z"
              />
            </svg>
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            className="flex items-center p-2 text-[#3f9997] font-medium hover:bg-[#3f9997] hover:text-white rounded-md"
          >
            <svg
              className="w-6 h-6 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5V4H2v16h5v-7h10v7zM2 8h20"
              />
            </svg>
            Users
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center p-2 text-[#3f9997] font-medium hover:bg-[#3f9997] hover:text-white rounded-md"
          >
            <svg
              className="w-6 h-6 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 2m6 2v-4a9 9 0 00-18 0v4"
              />
            </svg>
            Settings
          </Link>
          <Link
            to="/admin/reports"
            className="flex items-center p-2 text-[#3f9997] font-medium hover:bg-[#3f9997] hover:text-white rounded-md"
          >
            <svg
              className="w-6 h-6 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v4h6v-4m-6-5V7l3-3 3 3v5m-4 10h4a2 2 0 002-2v-4H9v4a2 2 0 002 2zm2-14v10"
              />
            </svg>
            Reports
          </Link>
        </nav>
        <div className="mt-6">
          <Link
            to="/logout"
            className="flex items-center p-2 text-[#3f9997] font-medium hover:bg-[#3f9997] hover:text-white rounded-md"
          >
            <svg
              className="w-6 h-6 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
              />
            </svg>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
