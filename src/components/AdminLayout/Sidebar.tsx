import { Link, useLocation } from "react-router-dom";
import { icons } from "../../Icons/constant";
const {
  HiOutlineDocumentReport,
  HiOutlineUsers,
  CiHome,
  CiSettings,
  RxDashboard,
  IoIosLogOut,
} = icons;

function Sidebar() {
  const location = useLocation(); // Hook to get current location

  // Function to determine if the link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      style={{ width: "300px" }}
      className="h-full flex-col bg-white text-white shadow-lg hidden md:flex"
    >
      <div className="flex flex-col justify-between flex-grow p-4">
        <nav className="flex flex-col space-y-2">
          <Link
            to="/admin/dashboard"
            className={`flex items-center p-2 ${
              isActive("/admin/dashboard")
                ? "bg-[#3f9997] text-white"
                : "text-[#3f9997] hover:bg-[#3f9997] hover:text-white"
            } font-medium rounded-md`}
          >
            <RxDashboard style={{ fontSize: "20px", margin: "0 10px" }} />
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            className={`flex items-center p-2 ${
              isActive("/admin/users")
                ? "bg-[#3f9997] text-white"
                : "text-[#3f9997] hover:bg-[#3f9997] hover:text-white"
            } font-medium rounded-md`}
          >
            <HiOutlineUsers style={{ fontSize: "20px", margin: "0 10px" }} />
            Users
          </Link>
          <Link
            to="/admin/settings"
            className={`flex items-center p-2 ${
              isActive("/admin/settings")
                ? "bg-[#3f9997] text-white"
                : "text-[#3f9997] hover:bg-[#3f9997] hover:text-white"
            } font-medium rounded-md`}
          >
            <CiSettings style={{ fontSize: "20px", margin: "0 10px" }} />
            Settings
          </Link>
          <Link
            to="/admin/reports"
            className={`flex items-center p-2 ${
              isActive("/admin/reports")
                ? "bg-[#3f9997] text-white"
                : "text-[#3f9997] hover:bg-[#3f9997] hover:text-white"
            } font-medium rounded-md`}
          >
            <HiOutlineDocumentReport
              style={{ fontSize: "20px", margin: "0 10px" }}
            />
            Reports
          </Link>
          <Link
            to="/"
            className={`flex items-center p-2 ${
              isActive("/")
                ? "bg-[#3f9997] text-white"
                : "text-[#3f9997] hover:bg-[#3f9997] hover:text-white"
            } font-medium rounded-md`}
          >
            <CiHome style={{ fontSize: "20px", margin: "0 10px" }} />
            Home
          </Link>
        </nav>
        <div className="mt-6">
          <Link
            to="/login"
            className={`flex items-center p-2 ${
              isActive("/login")
                ? "bg-[#3f9997] text-white"
                : "text-[#3f9997] hover:bg-[#3f9997] hover:text-white"
            } font-medium rounded-md`}
          >
            <IoIosLogOut style={{ fontSize: "20px", margin: "0 10px" }} />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
