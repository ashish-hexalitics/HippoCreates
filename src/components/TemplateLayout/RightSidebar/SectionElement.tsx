import { useState } from "react";
import { TemplateStyle } from "../../../dto/templateStyle.dto";
import { icons } from "../../../Icons/constant";
import { paddingPositionOptions } from "./utills";
const {
  TbBorderBottomPlus,
  TbBorderLeftPlus,
  TbBorderTopPlus,
  TbBorderRightPlus,
  TbBorderOuter,
} = icons;

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
  const [options, setOptions] = useState([
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
  ]);
  console.log(element, element.sectionType, "handleInputChange");

  return (
    <>
      {element.content.startsWith("Section") && (
        <div className="w-full rounded-lg">
          <span className="text-sm font-semibold text-gray-700">Label:</span>
          <div className="w-full grid grid-cols-1 space-y-2 py-2 ">
            <div className="grid grid-cols-2">
              <div>
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
                    value={element.labelsFontSize}
                    className="w-16 px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    onChange={(e) =>
                      handleInputChange("labelsFontSize", e.target.value)
                    }
                  />
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  Font Weight:
                </span>
                <select
                  name="labelsFontWeight"
                  className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  value={element.labelsFontWeight}
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
            <div className="grid grid-cols-2">
              {[
                {
                  label: "Underline",
                  value: "underline",
                },
                {
                  label: "None",
                  value: "none",
                },
              ].map((item, key) => (
                <>
                  <label className="flex items-center space-x-3" key={key}>
                    <button
                      className={`text-sm font-semibold text-gray-700 ${
                        item.value === element.SectionLabelUnderline
                          ? "underline"
                          : ""
                      }`}
                      onClick={() =>
                        handleInputChange("SectionLabelUnderline", item.value)
                      }
                    >
                      {item.label}
                    </button>
                  </label>
                </>
              ))}
            </div>
            <div className="grid grid-cols-2">
              {[
                {
                  label: "Dot",
                  value: true,
                },
                {
                  label: "None",
                  value: false,
                },
              ].map((item, key) => (
                <>
                  <label className="flex items-center space-x-3" key={key}>
                    <button
                      className={`text-sm font-semibold text-gray-700 ${
                        item.value === element.showDot ? "underline" : ""
                      }`}
                      onClick={() => handleInputChange("showDot", item.value)}
                    >
                      {item.label}
                    </button>
                  </label>
                </>
              ))}
            </div>
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
                value={element.SectionBgColor}
                onChange={(e) =>
                  handleInputChange("SectionBgColor", e.target.value)
                }
                name="backgroundColor"
                className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <span className="text-sm font-semibold text-gray-700">
                Spaceing:
              </span>
              <select
                name="paddingPosition"
                className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                onChange={(e) => {
                  handleInputChange("paddingPosition", e.target.value);
                }}
                value={element.paddingPosition}
              >
                {options.map((option, key) => (
                  <option key={key} value={JSON.stringify(option.value)}>
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                type="number"
                onChange={(e) => {
                  // const paddingPosition =  element.paddingPosition && JSON.parse(element.paddingPosition)
                  // const paddingKeys = Object.keys(paddingPosition)
                  // const newSpaceing:any = {}
                  // paddingKeys.forEach((prop)=>{
                  //   newSpaceing[prop]=e.target.value + "px"
                  // })
                  // const newpaddingPosition = JSON.stringify(newSpaceing)
                  // const paddingPosition =
                  //   element.paddingPosition &&
                  //   options.filter(
                  //     (optn) =>
                  //       element.paddingPosition === JSON.stringify(optn.value)
                  //   );
              //  console.log(paddingPosition,"paddingPosition",element.paddingPosition)
                  handleInputChange("paddingPx", e.target.value + "px");
                  // handleInputChange("paddingPosition", newpaddingPosition)
                }}
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
            <div className=" space-y-2 py-2">
              <div className="grid grid-cols-5">
                {[
                  {
                    label: "TOP",
                    value: "borderTop",
                    icon: <TbBorderTopPlus size={20} />,
                  },
                  {
                    label: "LEFT",
                    value: "borderLeft",
                    icon: <TbBorderLeftPlus size={20} />,
                  },
                  {
                    label: "BOTTOM",
                    value: "borderBottom",
                    icon: <TbBorderBottomPlus size={20} />,
                  },
                  {
                    label: "RIGHT",
                    value: "borderRight",
                    icon: <TbBorderRightPlus size={20} />,
                  },
                  {
                    label: "All",
                    value: "border",
                    icon: <TbBorderOuter size={20} />,
                  },
                ].map((item, key) => (
                  <>
                    <label className="flex items-center space-x-3" key={key}>
                      {/* <span className="text-sm font-semibold text-gray-700">
                      {item.label}
                    </span> */}
                      {item.icon}
                      <input
                        type="radio"
                        value={item.value}
                        onChange={(e) =>
                          handleInputChange("SectionBorder", e.target.value)
                        }
                      />
                    </label>
                  </>
                ))}
              </div>
              <div className="grid grid-cols-2">
                <label className="flex items-center space-x-3">
                  <span className="text-sm font-semibold text-gray-700">
                    Color:
                  </span>
                  <input
                    type="color"
                    onChange={(e) =>
                      handleInputChange("SectionBorderColor", e.target.value)
                    }
                    name="SectionBorderColor"
                    className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                  />
                </label>
                <label className="flex items-center space-x-3">
                  <span className="text-sm font-semibold text-gray-700">
                    Strock:
                  </span>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    onChange={(e) =>
                      handleInputChange("SectionBorderWidth", e.target.value)
                    }
                    name="SectionBorderWidth"
                    className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-700">
              List Styles :
            </span>
            <div className="grid grid-cols-2">
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  Color:
                </span>
                <input
                  type="color"
                  onChange={(e) =>
                    handleInputChange("listItemsColor", e.target.value)
                  }
                  name="listItemsColor"
                  className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                />
              </label>
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  Font Size:
                </span>
                <input
                  type="number"
                  name="listItemsFontSize"
                  min="10"
                  max="36"
                  defaultValue="16"
                  className="w-16 px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={(e) =>
                    handleInputChange("listItemsFontSize", e.target.value)
                  }
                />
              </label>
              {[
                {
                  label: "Underline",
                  value: "underline",
                },
                {
                  label: "None",
                  value: "none",
                },
              ].map((item, key) => (
                <>
                  <label className="flex items-center space-x-3" key={key}>
                    <button
                      className={`text-sm font-semibold text-gray-700 ${
                        item.value === element.listItemTextDecoration
                          ? "underline"
                          : ""
                      }`}
                      onClick={() =>
                        handleInputChange("listItemTextDecoration", item.value)
                      }
                    >
                      {item.label}
                    </button>
                  </label>
                </>
              ))}
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  Font Weight:
                </span>
                <select
                  name="listItemsFontWeight"
                  className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={(e) =>
                    handleInputChange("listItemsFontWeight", e.target.value)
                  }
                >
                  <option value="normal">Normal</option>
                  <option value="thin">Medium</option>
                  <option value="bolder">Bolder</option>
                  <option value="lighter">Lighter</option>
                </select>
              </label>
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  Font Weight:
                </span>
                <select
                  name="listItemsFontWeight"
                  className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={(e) =>
                    handleInputChange("listItemsFontWeight", e.target.value)
                  }
                >
                  <option value="normal">Normal</option>
                  <option value="thin">Medium</option>
                  <option value="bolder">Bolder</option>
                  <option value="lighter">Lighter</option>
                </select>
              </label>
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  List Type :
                </span>
                <select
                  name="listItemType"
                  className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={(e) =>
                    handleInputChange("listItemType", e.target.value)
                  }
                >
                  <option value="disc">Disc</option>
                  <option value="circle">Circle</option>
                  <option value="square">Square</option>
                  <option value="decimal">Decimal</option>
                  <option value="decimal-leading-zero">
                    Decimal Leading zero
                  </option>
                  <option value="lower-roman">Lower Roman</option>
                  <option value="upper-roman">Upper Roman</option>
                  <option value="lower-alpha">Lower Alpha</option>
                  <option value="upper-alpha">Upper Alpha</option>
                </select>
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
