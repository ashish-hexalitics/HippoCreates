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
      className="flex md:flex-col flex-row justify-between items-center md:h-full h-[70px] w-full md:w-[100px] lg:w-[100px] bg-white text-white shadow-lg fixed md:relative top-0 md:top-auto z-10"
    >
      <nav className="flex md:flex-col flex-row space-x-2 sm:space-x-2 md:space-x-0 lg:space-x-0 space-y-0 sm:space-y-0 md:space-y-4 lg:space-y-4 w-full md:flex-grow md:p-4 p-2">
        <h2
          className="font-bold text-gray-800 text-lg mb-5 hidden md:block"
          id="borderBottomEffect"
          style={{ letterSpacing: "4px" }}
        >
          HC
        </h2>
        {routes.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`relative flex items-center justify-center space-x-2 py-2 px-2 md:py-4 ${
              isActive(path)
                ? "bg-[#3f9997] text-white"
                : "text-[#3f9997] hover:bg-[#3f9997] hover:text-white"
            } font-medium rounded-md group`}
          >
            <Icon style={{ fontSize: "18px" }} />
            <span
              className="absolute left-full ml-2 bg-white text-gray-700 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md z-20"
              style={{ whiteSpace: "nowrap" }}
            >
              {label}
            </span>
          </Link>
        ))}
      </nav>
      <div className="md:mt-6">
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
  );
}

export default Sidebar;
