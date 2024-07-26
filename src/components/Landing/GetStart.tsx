// import React from "react";
import businessJoyfulWoman from "../../assets/images/3d-business-joyful-woman-pointing-diagonally.png";
// import businessYoungman from "../assets/images/3d-business-young-man-got-an-idea.png";
import businessYoungWomen from "../../assets/images/3d-business-young-woman-has-an-idea.png";
function GetStart() {
  return (
    <>
      <section className="h-screen flex justify-center relative">
        <img
          src={businessYoungWomen}
          className="absolute w-[300px] top-[30%] left-[10%]"
        />
        <div className="w-1/2 flex flex-col items-center text-center">
          <h2 className="font-extrabold text-gray-700 text-6xl mt-28 animate-[fade-in-down_1s_ease-in-out]">
            Check Your <br /> Well-being
          </h2>
          <p className="m-4 text-gray-700 text-md font-medium font-sans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            autem, quam, <br />
            at consectetur quia, illo error blanditiis veniam nesciunt voluptas
            debitis! <br />
            Sunt sint mollitia quod eveniet. Exercitationem enim possimus
            sapiente?
          </p>
          <button className="px-12 py-2 bg-[#55bab9] text-white shadow-sm rounded-md">
            <span className="text-md font-bold">Start General Test</span>
            <br />
            <span className="text-sm text-white font-medium">
              Start General Test
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
