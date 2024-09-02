import businessJoyfulWoman from "../../assets/images/3d-business-joyful-woman-pointing-diagonally.png";
import businessYoungWomen from "../../assets/images/3d-business-young-woman-has-an-idea.png";
import { useNavigate } from "react-router-dom";
function GetStart() {
  const navigate = useNavigate();
  return (
    <>
      <section className="section h-screen flex justify-center rlative">
        <img
          src={businessYoungWomen}
          className="absolute w-[300px] top-[26%] left-[8%]"
        />
        <div className="w-1/2 flex flex-col items-center text-center">
          <h2 className="font-extrabold text-gray-700 text-6xl mt-28 animate-[fade-in-down_1s_ease-in-out]">
            Transform Your <br /> Career with a <br />
            Stunning
            <span id="borderBottomEffect" className="ms-4" style={{ letterSpacing: "10px" }}>
              Resume
            </span>
          </h2>
          <p className="m-4 text-gray-700 text-md font-medium font-sans">
            Take the first step toward your dream job by creating a resume that
            stands out. <br />
            Our tools make it easy to design a professional resume in just
            minutes.
            <br />
            Your resume is your personal brand. Make it unforgettable with our{" "}
            <br /> easy-to-use resume builder, designed to help you land your
            dream job.
          </p>
          <button
            onClick={() => navigate("/steps")}
            className="px-12 py-2 bg-[#55bab9] text-white shadow-sm rounded-md"
          >
            <span className="text-md font-bold">
              Start And Build Your Own Template
            </span>
            <br />
            <span className="text-sm text-white font-medium">
              Start Your 30 Day's Trail
            </span>
          </button>
        </div>
        <img
          src={businessJoyfulWoman}
          className="absolute w-[300px] top-[26%] right-[8%]"
        />
      </section>
    </>
  );
}

export default GetStart;
