// import React from "react";
import { TemplateStyle } from "../../../dto/templateStyle.dto";

function SectionElement({ element }:{element:TemplateStyle}) {
  return (
    <>
      {element.content.startsWith("Section") && (
        <div className="w-full rounded-lg space-y-4">
          <div>
            <label className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-700">
                Label Color:
              </span>
              <input
                type="color"
                name="labelsColor"
                className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-700">
                Font Size:
              </span>
              <input
                type="number"
                name="fontSize"
                min="10"
                max="36"
                defaultValue="16"
                className="w-16 px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-700">
                Font Weight:
              </span>
              <select
                name="fontWeight"
                className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="bolder">Bolder</option>
                <option value="lighter">Lighter</option>
              </select>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-700">
                Background Color:
              </span>
              <input
                type="color"
                name="backgroundColor"
                className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <span className="text-lg font-semibold text-gray-700">
                Text Alignment:
              </span>
              <select
                name="textAlign"
                className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </label>
          </div>
          <div>
            <span className="text-lg font-semibold text-gray-700">Border:</span>
            <div className="grid grid-cols-2">
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">TOP</span>
                <input type="radio" />
              </label>
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  LEFT
                </span>
                <input type="radio" />
              </label>
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  BOTTOM
                </span>
                <input type="radio" />
              </label>
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  RIGHT
                </span>
                <input type="radio" />
              </label>
            </div>
          </div>
        </div>
      )}

      {element.content.startsWith("Section") &&
        element.sectionType === "Contact" && (
          <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Contact Information
            </h3>
            <label className="block mb-2">
              <span className="text-sm text-gray-600">Name:</span>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-600">Email:</span>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </label>
          </div>
        )}

      {element.content.startsWith("Section") &&
        element.sectionType === "Education" && (
          <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Education
            </h3>
            <label className="block mb-2">
              <span className="text-sm text-gray-600">School Name:</span>
              <input
                type="text"
                placeholder="Your School"
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-600">Degree:</span>
              <input
                type="text"
                placeholder="Your Degree"
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </label>
          </div>
        )}
      {element.sectionType === "Employment" && (
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Employment History
          </h3>
          <label className="block mb-2">
            <span className="text-sm text-gray-600">Job Title:</span>
            <input
              type="text"
              placeholder="Your Job Title"
              className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-600">Company Name:</span>
            <input
              type="text"
              placeholder="Your Company"
              className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </label>
        </div>
      )}
      {element.sectionType === "Summary" && (
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Professional Summary
          </h3>
          <textarea
            placeholder="A brief summary of your professional background..."
            className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
            rows={4}
          />
        </div>
      )}
    </>
  );
}

export default SectionElement;
