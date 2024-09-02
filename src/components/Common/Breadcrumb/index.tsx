// import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ title="", breadcrumb }: { title: string; breadcrumb: string[] }) {
  console.log(title)
  return (
    <nav className="bg-gray-100 rounded-md w-full flex justify-between items-center my-5 p-4">
      <h2 className="font-bold text-[#3f9997] text-xl uppercase">{breadcrumb[breadcrumb.length-1]}</h2>
      <div>
        <ol className="list-reset flex text-gray-700">
          {breadcrumb.map((item: string, index: number) => {
            const isLast = index === breadcrumb.length - 1;
            return (
              <li key={index} className="flex items-center">
                {!isLast ? (
                  <>
                    <Link
                      to="#"
                      className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-800 focus:text-blue-800 active:text-blue-900 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
                    >
                      {item}
                    </Link>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
                  </>
                ) : (
                  <span className="text-gray-500 dark:text-gray-400">{item}</span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;
