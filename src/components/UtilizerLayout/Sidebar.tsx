import { Link, useLocation } from "react-router-dom";
import { icons } from "../../Icons/constant";

const {
  IoIosContact,
  FaBookReader,
  GrUserExpert,
  GiSkills,
  GrDocumentUser,
  IoMdArrowRoundBack,
} = icons;

function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const routes = [
    { path: "/build-resume/contact", icon: IoIosContact, label: "Contact" },
    { path: "/build-resume/experience", icon: GrUserExpert, label: "Experience" },
    { path: "/build-resume/education", icon: FaBookReader, label: "Education" },
    { path: "/build-resume/skills", icon: GiSkills, label: "Skills" },
    { path: "/build-resume/additional-details", icon: GrDocumentUser, label: "Additional Details" }
  ];

  return (
    <div
      style={{ width: "100px" }}
      className="h-full flex flex-col bg-white text-white shadow-lg"
    >
      <div className="flex flex-col justify-between flex-grow p-4">
        <nav className="flex flex-col space-y-6">
          <h2
            className="font-bold text-gray-800 text-lg mb-5"
            id="borderBottomEffect"
            style={{ letterSpacing: "4px" }}
          >
            HC
          </h2>
          {routes.map(({ path, icon: Icon, label }, index) => (
            <Link
              key={path}
              to={path}
              className={`relative flex items-center justify-center space-x-2 py-2 ${
                isActive(path)
                  ? "bg-[#3f9997] text-white"
                  : "text-[#3f9997] hover:bg-[#3f9997] hover:text-white"
              } font-medium rounded-md group`}
            >
              <span className={`flex items-center justify-center w-4 h-4 rounded-full ${isActive(path) ? "bg-white text-[#3f9997]" : "bg-[#3f9997] text-white"} font-semibold`}>
                {index + 1}
              </span>
              <Icon style={{ fontSize: "18px" }} />
              <span
                className="absolute left-full ml-2 bg-white text-gray-700 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                style={{ whiteSpace: "nowrap" }}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="mt-6">
          <button
            className={`relative flex flex-col items-center justify-center p-2 w-full text-[#3f9997] hover:bg-[#3f9997] hover:text-white font-medium rounded-md group`}
          >
            <IoMdArrowRoundBack style={{ fontSize: "18px" }} />
            <span
              className="absolute left-full ml-2 bg-white text-gray-700 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
              style={{ whiteSpace: "nowrap" }}
            >
              Back
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
