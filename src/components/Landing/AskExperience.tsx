import { icons } from "../../Icons/constant";
const { IoBriefcaseOutline } = icons;
import { useNavigate } from "react-router-dom";

function AskExperience() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col py-12 items-center text-center px-6 md:px-12">
      <div className="my-6 flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto">
        <div className="bg-green-100 p-6 rounded-full flex items-center justify-center">
          <IoBriefcaseOutline className="text-green-600 text-3xl" />
        </div>
      </div>
      <div className="w-full">
        <h2 className="font-extrabold text-gray-700 text-4xl md:text-5xl">
          How Much Work <br /> Experience Do You Have?
        </h2>
        <p className="text-gray-700 text-sm md:text-md font-medium font-sans my-4 md:my-6">
          We Can Give You Better Advice And Guidance If We Know.
        </p>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-4xl mx-auto px-6 md:px-12 mb-6">
        <button className="bg-transparent border-2 sm:w-full w-full md:w-1/4 lg:w-1/4 border-gray-700 text-gray-700 font-medium py-2 px-8 rounded-md text-base md:text-lg">
          No Experience
        </button>
        <button className="bg-transparent border-2 sm:w-full w-full md:w-1/4 lg:w-1/4 border-gray-700 text-gray-700 font-medium py-2 px-8 rounded-md text-base md:text-lg">
          Entry-level
        </button>
        <button className="bg-transparent border-2 sm:w-full w-full md:w-1/4 lg:w-1/4 border-gray-700 text-gray-700 font-medium py-2 px-8 rounded-md text-base md:text-lg">
          Mid-level
        </button>
        <button className="bg-transparent border-2 sm:w-full w-full md:w-1/4 lg:w-1/4 border-gray-700 text-gray-700 font-medium py-2 px-8 rounded-md text-base md:text-lg">
          Senior
        </button>
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-4xl mx-auto">
        <button
          className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-base md:text-lg"
          onClick={() => navigate("/choose-resume")}
        >
          Continue
        </button>
      </div>
    </section>
  );
}

export default AskExperience;
