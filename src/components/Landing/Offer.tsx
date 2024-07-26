// import React from "react";

function Offer() {
  return (
    <section className="flex-col justify-center items-center dark:bg-[#fbf8f1]">
      <div className="text-center">
        <h2 className="font-extrabold text-gray-700 text-6xl mt-28 animate-[fade-in-down_1s_ease-in-out]">
          What We Offer
        </h2>
        <p className="text-lg mt-6">
          We offer a range of services including mental health support, physical
          wellness programs, and nutritional advice.
        </p>
      </div>
      <div className="grid  grid-cols-2 mt-10 p-12">
        <div className="py-12  border-r-2 border-dashed border-gray-300">
          <div className="p-12 border-b-2 border-dashed border-gray-300 text-right">
          <p className="m-4 text-gray-700 text-md font-medium font-sans text-right">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            autem, quam, <br />
            at consectetur quia, illo error blanditiis veniam nesciunt voluptas
            debitis! <br />
            Sunt sint mollitia quod eveniet. Exercitationem enim possimus
            sapiente?
          </p>
          </div>
          <div className="p-12">
          <p className="m-4 text-gray-700 text-md font-medium font-sans text-right">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            autem, quam, <br />
            at consectetur quia, illo error blanditiis veniam nesciunt voluptas
            debitis! <br />
            Sunt sint mollitia quod eveniet. Exercitationem enim possimus
            sapiente?
          </p>
          </div>
        </div>
        <div className="py-12">
          <div className="p-12 border-b-2 border-dashed border-gray-300">
          <p className="m-4 text-gray-700 text-md font-medium font-sans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            autem, quam, <br />
            at consectetur quia, illo error blanditiis veniam nesciunt voluptas
            debitis! <br />
            Sunt sint mollitia quod eveniet. Exercitationem enim possimus
            sapiente?
          </p>
          </div>
          <div className="p-12">
          <p className="m-4 text-gray-700 text-md font-medium font-sans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            autem, quam, <br />
            at consectetur quia, illo error blanditiis veniam nesciunt voluptas
            debitis! <br />
            Sunt sint mollitia quod eveniet. Exercitationem enim possimus
            sapiente?
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
