import { useNavigate } from "react-router-dom";
import { icons } from "../../Icons/constant";
const { FaRegFileAlt, TfiPencil, HiOutlineDesktopComputer } = icons;

function IntroduceSteps() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col py-12 items-center  text-center px-6 md:px-12">
      <div className="w-full mb-8">
        <h2 className="font-extrabold text-gray-700 text-6xl">
          Here's what you need to know
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-8">
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <div className="bg-green-100 p-6 rounded-full mb-4 flex items-center justify-center">
            <FaRegFileAlt className="text-green-600 text-3xl" />
          </div>
          <h3 className="font-bold text-lg text-gray-700">Step 1</h3>
          <p className="m-4 text-gray-700 text-sm font-medium font-sans">
            Check out our pre-designed templates and guided steps, allowing you
            to create a polished resume faster.
          </p>
        </div>
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <div className="bg-blue-100 p-6 rounded-full mb-4 flex items-center justify-center">
            <TfiPencil className="text-blue-600 text-3xl" />
          </div>
          <h3 className="font-bold text-lg text-gray-700">Step 2</h3>
          <p className="m-4 text-gray-700 text-sm font-medium font-sans">
            Get the right words to describe what you do. Search by job title and
            find pre-written content of your skills and responsibilities.
          </p>
        </div>
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <div className="bg-yellow-100 p-6 rounded-full mb-4 flex items-center justify-center">
            <HiOutlineDesktopComputer className="text-yellow-600 text-3xl" />
          </div>
          <h3 className="font-bold text-lg text-gray-700">Step 3</h3>
          <p className="m-4 text-gray-700 text-sm font-medium font-sans">
            We'll help you fine-tune the details, quickly generate each section,
            and download your new resume. That's it - you're ready to apply!
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full max-w-4xl mx-auto mt-8">
        <button
          className="bg-gray-700 text-white  font-bold py-3 px-8 rounded-full text-lg"
          onClick={() => navigate("/ask-experience")}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
{
  /* <button className="px-4 py-2 bg-black text-white rounded-md"> */
}

export default IntroduceSteps;
