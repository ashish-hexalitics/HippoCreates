import { useState } from "react";
import { TemplateStyle } from "../../../dto/templateStyle.dto";
import { icons } from "../../../Icons/constant";
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
  handleCopyStyle,
}: {
  element: TemplateStyle;
  handleInputChange: (
    field: keyof TemplateStyle,
    value: string | number | boolean
  ) => void;
  handleCopyStyle?: (applyOn: string) => void;
}) {
  const [paddingPix, setPaddingPix] = useState(element.paddingPx);
  const options = [
    {
      value: { paddingTop: paddingPix },
      label: "Padding Top",
    },
    {
      value: { paddingLeft: paddingPix },
      label: "Padding Left",
    },
    {
      value: { paddingRight: paddingPix },
      label: "Padding Right",
    },
    {
      value: { paddingBottom: paddingPix },
      label: "Padding Bottom",
    },
    {
      value: {
        paddingTop: paddingPix,
        paddingLeft: paddingPix,
      },
      label: "Padding Top Left",
    },
    {
      value: {
        paddingBottom: paddingPix,
        paddingLeft: paddingPix,
      },
      label: "Padding Top Right",
    },
    {
      value: {
        paddingRight: paddingPix,
        paddingTop: paddingPix,
      },
      label: "Padding Right Top",
    },
    {
      value: {
        paddingBottom: paddingPix,
        paddingRight: paddingPix,
      },
      label: "Padding Bottom Right",
    },
    {
      value: { padding: paddingPix },
      label: "Padding All",
    },
  ];

  return (
    <>
      {element.content.startsWith("Section") && (
        <div className="w-full rounded-lg">
          <span className="text-sm font-semibold text-gray-700 me-2">
            Label :
          </span>
          <button
            className="text-sm"
            onClick={() => handleCopyStyle && handleCopyStyle("label")}
          >
            Apply On All Section
          </button>
          <div className="w-full grid grid-cols-1 space-y-2 bg-gray-100 rounded-md p-2 mt-2">
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
            <label className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-700">
                Text Styles :
              </span>
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
                  <button
                    className={`text-sm font-semibold text-gray-700 ${
                      item.value === element.SectionLabelUnderline
                        ? "underline"
                        : ""
                    }`}
                    key={key}
                    onClick={() =>
                      handleInputChange("SectionLabelUnderline", item.value)
                    }
                  >
                    {item.label}
                  </button>
                </>
              ))}
            </label>
            <label className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-700">
                Text Styles :
              </span>
              {[
                {
                  label: "Dot",
                  value: "dot",
                },
                {
                  label: "None",
                  value: "none",
                },
              ].map(
                (
                  item: {
                    label: string;
                    value: string;
                  },
                  key
                ) => (
                  <>
                    <button
                      className={`text-sm font-semibold text-gray-700 ${
                        item.value === element.showDot ? "underline" : ""
                      }`}
                      onClick={() => handleInputChange("showDot", item.value)}
                      key={key}
                    >
                      {item.label}
                    </button>
                  </>
                )
              )}
            </label>
          </div>

          <div className="w-full py-2">
            <span className="text-sm font-semibold text-gray-700 me-2">
              Section :
            </span>
            <button
              className="text-sm"
              onClick={() =>
                handleCopyStyle && handleCopyStyle("SectionBackground")
              }
            >
              Apply On All Section
            </button>
            <div className="bg-gray-100 rounded-md p-2 space-y-2 mt-2">
              <label className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-700">
                  Background Color :
                </span>
                <input
                  type="color"
                  value={element.SectionBgColor}
                  onChange={(e) =>
                    handleInputChange("SectionBgColor", e.target.value)
                  }
                  name="SectionBgColor"
                  className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                />
              </label>
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
                    const paddingPosition =
                      element.paddingPosition &&
                      JSON.parse(element.paddingPosition);
                    const paddingKeys = Object.keys(paddingPosition);
                    const newSpaceing: any = {};
                    paddingKeys.forEach((prop) => {
                      newSpaceing[prop] = e.target.value + "px";
                    });
                    const newpaddingPosition = JSON.stringify(newSpaceing);
                    setPaddingPix(e.target.value + "px");
                    handleInputChange("paddingPx", e.target.value + "px");
                    handleInputChange("paddingPosition", newpaddingPosition);
                  }}
                  value={
                    paddingPix?.includes("px")
                      ? Number(paddingPix.replace("px", ""))
                      : 0
                  }
                  name="paddingPx"
                  className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                />
              </label>
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
          </div>
          <div>
            <div className="space-y-2 py-2">
              <span className="text-sm font-semibold text-gray-700 me-2">
                Border :
              </span>
              <button
                className="text-sm"
                onClick={() =>
                  handleCopyStyle && handleCopyStyle("SectionBorder")
                }
              >
                Apply On All Section
              </button>
              <div className="grid grid-cols-2 bg-gray-100 space-x-2 rounded-md p-2">
                <div className="w-[70px] h-[100%] relative">
                  {[
                    {
                      label: "TOP",
                      value: "borderTop",
                      class: "top-0 left-[50%] -translate-x-[50%]",
                      icon: (
                        <TbBorderTopPlus
                          size={20}
                          onClick={() =>
                            handleInputChange("SectionBorder", "borderTop")
                          }
                        />
                      ),
                    },
                    {
                      label: "LEFT",
                      value: "borderLeft",
                      class: "top-[50%] left-0 -translate-y-[50%]",
                      icon: (
                        <TbBorderLeftPlus
                          size={20}
                          onClick={() =>
                            handleInputChange("SectionBorder", "borderLeft")
                          }
                        />
                      ),
                    },
                    {
                      label: "BOTTOM",
                      value: "borderBottom",
                      class: "bottom-0 left-[50%] -translate-x-[50%]",
                      icon: (
                        <TbBorderBottomPlus
                          size={20}
                          onClick={() =>
                            handleInputChange("SectionBorder", "borderBottom")
                          }
                        />
                      ),
                    },
                    {
                      label: "RIGHT",
                      value: "borderRight",
                      class: "top-[50%] right-0 -translate-y-[50%]",
                      icon: (
                        <TbBorderRightPlus
                          size={20}
                          onClick={() =>
                            handleInputChange("SectionBorder", "borderRight")
                          }
                        />
                      ),
                    },
                    {
                      label: "All",
                      value: "border",
                      class:
                        "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                      icon: (
                        <TbBorderOuter
                          size={20}
                          onClick={() =>
                            handleInputChange("SectionBorder", "border")
                          }
                        />
                      ),
                    },
                  ].map((item, key) => (
                    <>
                      <label
                        className={`flex items-center space-x-3 absolute ${item.class}`}
                        key={key}
                      >
                        {item.icon}
                      </label>
                    </>
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <span className="text-sm font-semibold text-gray-700">
                      Color:
                    </span>
                    <input
                      type="color"
                      onChange={(e) =>
                        handleInputChange("SectionBorderColor", e.target.value)
                      }
                      value={element.SectionBorderColor}
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
                      value={element.SectionBorderWidth}
                      defaultValue={1}
                      name="SectionBorderWidth"
                      className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-700 me-2">
              List Styles :
            </span>
            <button
              className="text-sm"
              onClick={() => handleCopyStyle && handleCopyStyle("SectionList")}
            >
              Apply On All Section
            </button>
            <div className="grid grid-cols-1 space-y-2 bg-gray-100 rounded-md p-2 mt-2">
              <label className="flex items-center justify-between space-x-2">
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
              <label className="flex items-center justify-between space-x-2">
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
              <label className="flex items-center justify-between space-x-2">
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
              <label className="flex items-center justify-between space-x-2">
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
              <label className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-700">
                  Text Styles :
                </span>
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
                    <button
                      key={key}
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
                  </>
                ))}
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
          <div className="w-full space-y-2 pt-2">
            <span className="text-sm font-semibold text-gray-700 me-2">
              Education :
            </span>
            <div className="w-full grid grid-cols-1  bg-gray-100 rounded-md p-2">
              <label className="flex mb-2">
                <span className="text-sm text-gray-600 me-2">
                  Show Institute Name :
                </span>
                <input
                  type="checkbox"
                  className="mt-1 block border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={() =>
                    handleInputChange("showInstituteName", true)
                  }
                />
              </label>
              <label className="flex mb-2">
                <span className="text-sm text-gray-600 me-2">
                  Show Course Name:
                </span>
                <input
                  type="checkbox"
                  className="mt-1 block border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={() =>
                    handleInputChange("showCourseName", true)
                  }
                />
              </label>
              <label className="flex mb-2">
                <span className="text-sm text-gray-600 me-2">
                  Show Start And Ending Date:
                </span>
                <input
                  type="checkbox"
                  className="mt-1 block border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={() =>
                    handleInputChange("showEducationStartOrEndDate", true)
                  }
                />
              </label>
            </div>
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
