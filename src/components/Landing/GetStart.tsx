// import businessJoyfulWoman from "../../assets/images/3d-business-joyful-woman-pointing-diagonally.png";
// import businessYoungWomen from "../../assets/images/3d-business-young-woman-has-an-idea.png";
import resumeAvtar from "../../assets/images/resume_avtar.png";
import resumeAvtar2 from "../../assets/images/resume_avtar2.png";
import { useNavigate } from "react-router-dom";
function GetStart() {
  const navigate = useNavigate();
  return (
    <>
      <section className="section min-h-screen flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center rlative">
        <img
          src={resumeAvtar}
          className="absolute w-[300px] top-[26%] left-[8%] lg:block md:hidden sm:hidden hidden"
        />
        <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full px-4 space-y-4  lg:px-0 md:px-0 sm:px-4 flex flex-col items-center text-center">
          <h2 className="font-extrabold text-gray-700 text-3xl lg:text-6xl md:text-5xl sm:text-3xl mt-10 lg:mt-28 md:mt-10 sm:mt-10 animate-[fade-in-down_1s_ease-in-out]">
            Transform Your <br /> Career with a <br />
            Stunning
            <span id="borderBottomEffect" className="ms-4" style={{ letterSpacing: "10px" }}>
              Resume
            </span>
          </h2>
          <p className="m-0 lg:m-4 md:m-4 sm:m-0 text-gray-700 text-md font-medium font-sans">
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
            className="px-8 md:px-12 py-2 bg-[#55bab9] text-white shadow-sm rounded-md"
          >
            <span className="text-md font-bold">
              Start And Build Your Own Template
            </span>
            <br />
            <span className="text-sm text-white font-medium">
              Start Your 30 Day's Trial
            </span>
          </button>
          {/* <button
            onClick={() => navigate("/steps")}
            className="bg-[#55bab9] px-12 py-2 text-white shadow-lg rounded-md rainbow"
          >
            <span className="text-md font-bold">
              Start And Build Your Own Template
            </span>
            <br />
            <span className="text-sm text-white font-medium">
              Start Your 30 Day's Trail
            </span>
          </button> */}
        </div>
        <div className="w-full flex justify-center items-center md:flex sm:flex lg:hidden">
          <img
            src={resumeAvtar}
            className="w-[150px] md:w-[300px] mt-4 md:absolute md:top-[26%] md:left-[8%] md:mt-0"
          />
          <img
            src={resumeAvtar2}
            className="w-[150px] md:w-[300px] mt-4 md:absolute md:top-[26%] md:right-[8%] md:mt-0"
          />
        </div>
        <img
          src={resumeAvtar2}
          className="absolute w-[300px] top-[26%] right-[8%] lg:block md:hidden sm:hidden hidden"
        />
      </section>
    </>
  );
}

export default GetStart;
