import { useNavigate } from "react-router-dom";
import hippoLogoGray from "../../assets/images/hippoLogoGray.png";

function Header({ showLoginButton = true }: { showLoginButton?: boolean }) {
  const navigate = useNavigate();

  return (
    <nav className="flex w-full h-[70px] justify-between py-4 px-8">
      <img src={hippoLogoGray} className="w-auto" />
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
