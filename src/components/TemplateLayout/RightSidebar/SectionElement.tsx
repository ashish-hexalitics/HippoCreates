// import React from "react";
import { TemplateStyle } from "../../../dto/templateStyle.dto";

function SectionElement({
  element,
  handleInputChange,
}: {
  element: TemplateStyle;
  handleInputChange: (
    field: keyof TemplateStyle,
    value: string | number
  ) => void;
}) {
  return (
    <>
      {element.content.startsWith("Section") && (
        <div className="w-full rounded-lg space-y-4">
          <div>
            <span className="text-sm font-semibold text-gray-700">Label:</span>
            <label className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
              <span className="text-sm font-semibold text-gray-700">
                Color:
              </span>
              <input
                type="color"
                name="labelsColor"
                className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                value={element.labelsColor}
                onChange={(e) =>
                  handleInputChange("labelsColor", e.target.value)
                }
              />

              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4">
                {[
                  { label: "For All", value: "forAll" },
                  { label: "Only For This", value: "onlyForThis" },
                ].map((colorLabel, key) => (
                  <label key={key} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="ShowlabelsColor"
                      checked={element.ShowlabelsColor === colorLabel.value}
                      onChange={() =>
                        handleInputChange("ShowlabelsColor", colorLabel.value)
                      }
                      className="cursor-pointer"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      {colorLabel.label}
                    </span>
                  </label>
                ))}
              </div>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <span className="text-sm font-semibold text-gray-700">
                Font Size:
              </span>
              <input
                type="number"
                name="labelsFontSize"
                min="10"
                max="36"
                defaultValue="16"
                className="w-16 px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                onChange={(e) =>
                  handleInputChange("labelsFontSize", e.target.value)
                }
              />
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <span className="text-sm font-semibold text-gray-700">
                Font Weight:
              </span>
              <select
                name="fontWeight"
                className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                onChange={(e) =>
                  handleInputChange("labelsFontWeight", e.target.value)
                }
              >
                <option value="normal">Normal</option>
                <option value="thin">Medium</option>
                <option value="bolder">Bolder</option>
                <option value="lighter">Lighter</option>
              </select>
            </label>
          </div>

          <div>
            <span className="text-sm font-semibold text-gray-700">
              Section Background :
            </span>
            <label className="flex items-center space-x-3">
              <span className="text-sm font-semibold text-gray-700">
               Color:
              </span>
              <input
                type="color"
                onChange={(e) =>
                  handleInputChange("SectionBgColor", e.target.value)
                }
                name="backgroundColor"
                className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
              />
              {[
                { label: "For All", value: "forAll" },
                { label: "Only For This", value: "onlyForThis" },
              ].map((colorLabel, key) => (
                <label key={key} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="ShowSectionBgColor"
                    checked={element.ShowSectionBgColor === colorLabel.value}
                    onChange={() =>
                      handleInputChange("ShowSectionBgColor", colorLabel.value)
                    }
                    className="cursor-pointer"
                  />
                  <span className="text-sm font-semibold text-gray-700">
                    {colorLabel.label}
                  </span>
                </label>
              ))}
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <span className="text-sm font-semibold text-gray-700">
                Margin:
              </span>
              <select
                name="paddingPosition"
                className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                onChange={(e) =>
                  handleInputChange("paddingPosition", e.target.value)
                }
              >
                {[
                  {
                    value: { paddingTop: element.paddingPx },
                    label: "Padding Top",
                  },
                  {
                    value: { paddingLeft: element.paddingPx },
                    label: "Padding Left",
                  },
                  {
                    value: { paddingRight: element.paddingPx },
                    label: "Padding Right",
                  },
                  {
                    value: { paddingBottom: element.paddingPx },
                    label: "Padding Bottom",
                  },
                  {
                    value: {
                      paddingTop: element.paddingPx,
                      paddingLeft: element.paddingPx,
                    },
                    label: "Padding Top Left",
                  },
                  {
                    value: {
                      paddingBottom: element.paddingPx,
                      paddingLeft: element.paddingPx,
                    },
                    label: "Padding Top Right",
                  },
                  {
                    value: {
                      paddingRight: element.paddingPx,
                      paddingTop: element.paddingPx,
                    },
                    label: "Padding Right Top",
                  },
                  {
                    value: {
                      paddingBottom: element.paddingPx,
                      paddingRight: element.paddingPx,
                    },
                    label: "Padding Bottom Right",
                  },
                  {
                    value: { padding: element.paddingPx },
                    label: "Padding All",
                  },
                ].map((option, key) => (
                  <option key={key} value={JSON.stringify(option.value)}>
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                type="number"
                onChange={(e) =>
                  handleInputChange("paddingPx", e.target.value + "px")
                }
                value={
                  element.paddingPx?.includes("px")
                    ? Number(element.paddingPx.replace("px", ""))
                    : 0
                }
                name="paddingPx"
                className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <span className="text-sm font-semibold text-gray-700">
                Text Alignment:
              </span>
              <select
                name="textAlign"
                className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                onChange={(e) =>
                  handleInputChange("SectionTextAlignMent", e.target.value)
                }
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </label>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-700">Border:</span>
            <div className="grid grid-cols-2">
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">TOP</span>
                <input
                  type="radio"
                  value={"borderTop"}
                  onChange={(e) =>
                    handleInputChange("SectionBorder", e.target.value)
                  }
                />
              </label>
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  LEFT
                </span>
                <input
                  type="radio"
                  value={"borderLeft"}
                  onChange={(e) =>
                    handleInputChange("SectionBorder", e.target.value)
                  }
                />
              </label>
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  BOTTOM
                </span>
                <input
                  type="radio"
                  value={"borderBottom"}
                  onChange={(e) =>
                    handleInputChange("SectionBorder", e.target.value)
                  }
                />
              </label>
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  RIGHT
                </span>
                <input
                  type="radio"
                  value={"borderRight"}
                  onChange={(e) =>
                    handleInputChange("SectionBorder", e.target.value)
                  }
                />
              </label>
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">All</span>
                <input
                  type="radio"
                  value={"border"}
                  onChange={(e) =>
                    handleInputChange("SectionBorder", e.target.value)
                  }
                />
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
