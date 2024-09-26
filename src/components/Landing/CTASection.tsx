// import React from "react";

function CTASection() {
  return (
    <>
    {/* CTA Section */}
    <section className="section flex justify-center items-center dark:bg-[#fbf8f1]">
      <div className="w-full md:w-2/3 text-center px-4">
        <h2 className="font-extrabold text-gray-700 text-4xl md:text-6xl mt-16 md:mt-28 animate-[fade-in-down_1s_ease-in-out]">
          Get Started
        </h2>
        <p className="mt-3 text-gray-700 text-md md:text-lg font-medium font-sans">
          Ready to take the first step towards better well-being? Sign up today and start your journey with us.
        </p>
      </div>
    </section>

    <section className="flex w-full justify-center items-center dark:bg-[#fbf8f1] px-4">
      <div className="bg-gray-800 rounded-xl w-full md:w-[70%] flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 text-white py-6 md:py-8 mt-8 px-4 md:px-0">
        <p className="text-xl md:text-2xl font-semibold text-center md:text-left">Try for 30 days free!</p>
        <div className="flex flex-col md:flex-row justify-center md:justify-center space-y-3 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <button className="bg-[#49aba9] hover:bg-[#55bab9] text-white font-semibold py-2 px-6 rounded w-full md:w-auto">
            Get Started
          </button>
          <button className="bg-white text-[#55bab9] hover:text-[#49aba9] font-semibold py-2 px-6 rounded w-full md:w-auto">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  </>
  );
}

export default CTASection;
