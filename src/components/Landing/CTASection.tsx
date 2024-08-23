// import React from "react";

function CTASection() {
  return (
    <>
      {/* <!-- CTA Section --> */}
      <section className="flex justify-center items-center dark:bg-[#fbf8f1]">
        <div className="w-2/3 text-center">
          <h2 className="font-extrabold text-gray-700 text-6xl mt-28 animate-[fade-in-down_1s_ease-in-out]">
            Get Started
          </h2>
          <p className="mt-3 text-gray-700 text-lg font-medium font-sans ">
          Ready to take the first step towards better well-being? Sign up
            today and start your journey with us.
          </p>
        </div>
      </section>
      <section className="flex w-full justify-center items-center dark:bg-[#fbf8f1]">
        <div className="bg-gray-800 rounded-xl w-[70%] flex justify-center items-center space-x-4 text-white py-8 mt-8">
          <p className="text-2xl font-semibold">Try for 30 days free!</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-[#49aba9] hover:bg-[#55bab9] text-white font-semibold py-2 px-4 rounded">
              Get Started
            </button>
            <button className="bg-white text-[#55bab9] hover:text[#49aba9] font-semibold py-2 px-4 rounded">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTASection;
