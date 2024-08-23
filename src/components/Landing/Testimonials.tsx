// import React from "react";

function Testimonials() {
  return (
    <section className="flex flex-col justify-center items-center dark:bg-[#fbf8f1]">
      {/* <!-- Testimonials Section --> */}
      <div className="w-2/3 text-center">
        <h2 className="font-extrabold text-gray-700 text-6xl mt-28 animate-[fade-in-down_1s_ease-in-out]">
          Testimonials
        </h2>
        <p className="mt-3 text-gray-700 text-lg font-medium font-sans ">
          See what our happy customers have to say about us.<br/> Our services have
          transformed lives for the better.
        </p>
      </div>
      <div className="flex justify-center space-x-8 p-8">
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-800 text-lg mb-4">
            "InkDesk has refined my client communication and scheduling process
            to one platform! I find myself with more time and energy to focus on
            tattooing. Would recommend to all my artist friends!"
          </p>
          <div className="flex items-center mt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://via.placeholder.com/40"
              alt="Katrina Elena"
            />
            <div className="ml-4">
              <p className="text-gray-900 font-semibold">Katrina Elena</p>
              <div className="flex space-x-2">
                <span className="text-blue-500">@inkdesk</span>
                <span className="text-pink-500">@instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
