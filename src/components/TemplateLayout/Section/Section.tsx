import React from "react";
import { Rnd } from "react-rnd";


const Section: React.FC<any> = ({ element }) => {
  return (
    <Rnd className="group w-full relative flex flex-col border-2 border-blue-500 mt-2 overflow-hidden hover:border-yellow-500 p-4 bg-white rounded-md">
      {/* Contact Section */}
      {element.sectionType === "Contact" && (
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h3>
          <label className="block mb-2">
            <span className="text-sm text-gray-600">Name:</span>
          </label>
          <label className="block">
            <span className="text-sm text-gray-600">Email:</span>
          </label>
        </div>
      )}

      {/* Education Section */}
      {element.sectionType === "Education" && (
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Education</h3>
          <label className="block mb-2">
            <span className="text-sm text-gray-600">School Name:</span>
          </label>
          <label className="block">
            <span className="text-sm text-gray-600">Degree:</span>
          </label>
        </div>
      )}

      {/* Employment Section */}
      {element.sectionType === "Employment" && (
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Employment History</h3>
          <label className="block mb-2">
            <span className="text-sm text-gray-600">Job Title:</span>
          </label>
          <label className="block">
            <span className="text-sm text-gray-600">Company Name:</span>
          </label>
        </div>
      )}

      {/* Summary Section */}
      {element.sectionType === "Summary" && (
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Professional Summary</h3>
        </div>
      )}

      {/* Skills Section */}
      {element.sectionType === "Skills" && (
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Skills</h3>
          <label className="block mb-2">
            <span className="text-sm text-gray-600">Skill:</span>
          </label>
        </div>
      )}

      {/* Custom Section */}
      {element.sectionType === "CustomSection" && (
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Custom Section</h3>
        </div>
      )}
    </Rnd>
  );
};

export default Section;
