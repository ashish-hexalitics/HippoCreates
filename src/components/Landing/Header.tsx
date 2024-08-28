import { useNavigate } from "react-router-dom";

function Header({ showLoginButton = true }: { showLoginButton?: boolean }) {
  const navigate = useNavigate();

  return (
    <nav className="flex w-full h-[70px] justify-between py-4 px-8">
      <h2
        className="font-bold text-gray-700 text-xl"
        id="borderBottomEffect"
        style={{ letterSpacing: "2px" }}
      >
        HippoCreates
      </h2>
      {showLoginButton && (
        <button
          className="px-4 py-2 bg-[#55bab9] text-white shadow-md rounded-md"
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Header;
