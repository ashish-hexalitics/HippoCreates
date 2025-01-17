import { useState } from "react";
import { TemplateStyle } from "../../../dto/templateStyle.dto";
import { icons } from "../../../Icons/constant";
import { sectionType } from "../../../constant/sectionType";
import {
  educationDropdownOptions,
  employmentDropdownOptions,
} from "../../../constant/dropDownOption";
import { getPaddingOptions } from "../../../utills/UtillsFunc";
import IconifySearch from "../TopMenu/IconifySearch";
import { useGenerateSumaryWithAiMutation } from "../../../store/slices/ai/aiApi";
import { useUpdateUserResumeInfoMutation } from "../../../store/slices/resumeDetailsSlice/apiSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { updateAllElmentLayerExpactThisId } from "../../../store/slices/resumeTemplateSlice/resumeDetailSlice";
import InputComponent from "../Inputes/index";

const {
  TbBorderBottomPlus,
  TbBorderLeftPlus,
  TbBorderTopPlus,
  TbBorderRightPlus,
  TbBorderOuter,
  IoReturnDownBack,
  MdOutlineArrowRightAlt,
  MdOutlineArrowDownward,
} = icons;

function SectionElement({
  element,
  handleInputChange,
  // handleCopyStyle,
  roleName,
}: {
  element: TemplateStyle;
  handleInputChange: (
    field: keyof TemplateStyle,
    value:
      | string
      | number
      | boolean
      | { label: string; name: string; showField: boolean }[]
  ) => void;
  // handleCopyStyle?: (applyOn: string) => void;
  roleName: string | null;
}) {
  const dispatch = useAppDispatch();
  const { selectedElementId, selectedElement } = useAppSelector(
    (state) => state.resumeDetailSlice
  );

  const [paddingPix, setPaddingPix] = useState<any>(element.paddingPx);
  const [fields, setFields] = useState<
    { label: string; name: string; showField: boolean }[]
  >([
    { label: "First Name", name: "firstName", showField: false },
    { label: "Last Name", name: "lastName", showField: false },
    { label: "Name", name: "name", showField: false },
    { label: "Email", name: "email", showField: false },
    { label: "Phone", name: "phone", showField: false },
    { label: "Address", name: "address", showField: false },
    { label: "Gender", name: "gender", showField: false },
    { label: "Married Status", name: "marriedStatus", showField: false },
  ]);

  const [aiSuggetions, setAiSuggetions] = useState<{ text: string }[]>([]);

  const [generateSumaryWithAi, { isLoading: isAILoading }] =
    useGenerateSumaryWithAiMutation();

  const options = getPaddingOptions(paddingPix);
  // const dispatch = useAppDispatch();
  const [updateUserResumeInfo, { isLoading: isloadingUpdate }] =
    useUpdateUserResumeInfoMutation();

  const handleCheckboxChange = (index: number) => {
    const modifiedField = fields.map((field, i) =>
      i === index ? { ...field, showField: !field.showField } : field
    );
    setFields(modifiedField);
    handleInputChange("personalDetailFields", modifiedField);
  };

  const onIconSelect = (url: string) => {
    handleInputChange("ProfileIcon", url);
  };

  const generatePrompt = async () => {
    const result = await generateSumaryWithAi({
      promt: element?.data?.summary,
    }).unwrap();

    setAiSuggetions(result.data.options);
  };

  const onSubmit = async () => {
    await updateUserResumeInfo({
      summary: element?.data?.summary,
      userId: element?.data.userId,
      key: "userInfo",
    }).unwrap();
  };

  const handleSelectSuggestion = (text: string) => {
    handleInputChange("data", {
      ...element.data,
      summary: text,
    });
  };

  const handleCopyStyle = (data: any) => {
    dispatch(
      updateAllElmentLayerExpactThisId({
        id: selectedElementId,
        data: data,
      })
    );
  };

  return (
    <>
      {roleName && roleName === "admin" && (
        <div className="w-full rounded-lg">
          <span className="text-sm font-semibold text-gray-700 me-2">
            Label :
          </span>
          <button
            className="text-sm"
            onClick={() =>
              handleCopyStyle({
                labelsColor: selectedElement.labelsColor,
                labelsFontSize: selectedElement.labelsFontSize,
                labelsFontWeight: selectedElement.labelsFontWeight,
                SectionLabelUnderline: selectedElement.SectionLabelUnderline,
                showDot: selectedElement.showDot,
              })
            }
          >
            Apply On All Section
          </button>
          <div className="w-full grid grid-cols-1 space-y-2 bg-gray-100 rounded-md p-2 mt-2">
            <InputComponent
              label="Color"
              type="color"
              name="labelsColor"
              value={element?.labelsColor || "#000000"}
              onChange={(e) => handleInputChange("labelsColor", e.target.value)}
            />
            {/* <InputComponent
              label="Color"
              type="number"
              name="labelsFontSize"
              value={element?.labelsColor || "#000000"}
              onChange={(e) =>
                handleInputChange("labelsFontSize", e.target.value)
              }            /> */}
            <div className="flex items-center space-x-3">
              <label className="text-sm font-semibold text-gray-700">
                Font Size:
              </label>
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
            </div>
            <div className="flex items-center space-x-3">
              <label className="text-sm font-semibold text-gray-700">
                Font Weight:
              </label>
              <select
                name="labelsFontWeight"
                className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                value={element.labelsFontWeight}
                onChange={(e) =>
                  handleInputChange("labelsFontWeight", e.target.value)
                }
              >
                <option value="normal">Reguler</option>
                <option value="lighter">Lighter</option>
                <option value="500">Medium</option>
                <option value="bolder">Bolder</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-semibold text-gray-700">
                Text Styles :
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
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-semibold text-gray-700">
                Text Styles :
              </label>
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
            </div>
          </div>
          <div className="w-full py-2">
            <span className="text-sm font-semibold text-gray-700 me-2">
              Section :
            </span>
            <button
              className="text-sm"
              onClick={() =>
                handleCopyStyle({
                  SectionBgColor: selectedElement.SectionBgColor,
                  paddingPosition: selectedElement.paddingPosition,
                  paddingPx: selectedElement.paddingPx,
                  textAlign: selectedElement.textAlign,
                })
              }
            >
              Apply On All Section
            </button>
            <div className="bg-gray-100 rounded-md p-2 space-y-2 mt-2">
              <div className="flex items-center space-x-3">
                <label className="text-sm font-semibold text-gray-700">
                  Background Color :
                </label>
                <input
                  type="color"
                  value={element.SectionBgColor}
                  onChange={(e) =>
                    handleInputChange("SectionBgColor", e.target.value)
                  }
                  name="SectionBgColor"
                  className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                />
              </div>
              <div className="flex items-center space-x-3">
                <label className="text-sm font-semibold text-gray-700">
                  Spaceing:
                </label>
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
              </div>
              <div className="flex items-center space-x-3">
                <label className="text-sm font-semibold text-gray-700">
                  Text Alignment:
                </label>
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
              </div>
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
                  handleCopyStyle({
                    SectionBorder: selectedElement.SectionBorder,
                    SectionBorderColor: selectedElement.SectionBorderColor,
                    SectionBorderWidth: selectedElement.SectionBorderWidth,
                  })
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
                  <div className="flex items-center space-x-3">
                    <label className="text-sm font-semibold text-gray-700">
                      Color:
                    </label>
                    <input
                      type="color"
                      onChange={(e) =>
                        handleInputChange("SectionBorderColor", e.target.value)
                      }
                      value={element.SectionBorderColor}
                      name="SectionBorderColor"
                      className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <label className="text-sm font-semibold text-gray-700">
                      Strock:
                    </label>
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
                  </div>
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
              onClick={() =>
                handleCopyStyle({
                  listItemsColor: selectedElement.listItemsColor,
                  listItemsFontSize: selectedElement.listItemsFontSize,
                  listItemsFontWeight: selectedElement.listItemsFontWeight,
                  listItemType: selectedElement.listItemType,
                  listItemTextDecoration:
                    selectedElement.listItemTextDecoration,
                })
              }
            >
              Apply On All Section
            </button>
            <div className="grid grid-cols-1 space-y-2 bg-gray-100 rounded-md p-2 mt-2">
              <div className="flex items-center justify-between space-x-2">
                <label className="text-sm font-semibold text-gray-700">
                  Color:
                </label>
                <input
                  type="color"
                  onChange={(e) =>
                    handleInputChange("listItemsColor", e.target.value)
                  }
                  value={element.listItemsColor}
                  defaultValue={"#000"}
                  name="listItemsColor"
                  className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <label className="text-sm font-semibold text-gray-700">
                  Font Size:
                </label>
                <input
                  type="number"
                  name="listItemsFontSize"
                  min="10"
                  max="36"
                  defaultValue="16"
                  value={element.listItemsFontSize}
                  className="w-16 px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={(e) =>
                    handleInputChange("listItemsFontSize", e.target.value)
                  }
                />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <label className="text-sm font-semibold text-gray-700">
                  Font Weight:
                </label>
                <select
                  name="listItemsFontWeight"
                  className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={(e) =>
                    handleInputChange("listItemsFontWeight", e.target.value)
                  }
                  value={element.listItemsFontWeight}
                >
                  <option value="normal">Normal</option>
                  <option value="bold">Medium</option>
                  <option value="bolder">Bolder</option>
                  <option value="lighter">Lighter</option>
                </select>
              </div>
              <div className="flex items-center justify-between space-x-2">
                <label className="text-sm font-semibold text-gray-700">
                  List Type :
                </label>
                <select
                  name="listItemType"
                  className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={(e) =>
                    handleInputChange("listItemType", e.target.value)
                  }
                  value={element.listItemType}
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
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm font-semibold text-gray-700">
                  Text Styles :
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
              </div>
            </div>
          </div>
        </div>
      )}
      {element.sectionType === sectionType.contact && (
        <div className="w-full space-y-2 pt-2">
          <span className="text-sm font-semibold text-gray-700 me-2">
            Contact Information :
          </span>
          <div className="w-full grid grid-cols-1  bg-gray-100 rounded-md p-2">
            {fields.map((field, index) => (
              <div key={index} className="flex mb-2 items-center">
                <label className="text-sm text-gray-600 me-2 capitalize">
                  Show {field.label}:
                </label>
                <input
                  type="checkbox"
                  checked={
                    element.personalDetailFields?.find(
                      (f) => f.name === field.name
                    )?.showField
                  }
                  onChange={() => handleCheckboxChange(index)}
                  className="mt-1 block border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
            <div className="flex mb-2 items-center">
              <label className="text-sm text-gray-600 me-2 capitalize">
                Align Row:
              </label>
              <select
                onChange={(e) =>
                  handleInputChange("alignPersonalDetailGrid", e.target.value)
                }
                value={element.alignPersonalDetailGrid}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>
      )}
      {element.sectionType === sectionType.education && (
        <div className="w-full space-y-2 pt-2">
          <span className="text-sm font-semibold text-gray-700 me-2">
            Education :
          </span>
          <select
            onChange={(e) =>
              handleInputChange("educationTemplate", e.target.value)
            }
            value={element.educationTemplate}
          >
            <option value="default">Use Default</option>
            <option value="template">Template</option>
          </select>
          <div className="w-full grid grid-cols-1  bg-gray-100 rounded-md p-2">
            {element.educationTemplate === "default" ? (
              <>
                <div className="flex mb-2">
                  <label className="text-sm text-gray-600 me-2">
                    Show Institute Name :
                  </label>
                  <input
                    type="checkbox"
                    value={element.showInstituteName}
                    checked={element.showInstituteName == "yes"}
                    className="mt-1 block border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                    onChange={() =>
                      handleInputChange(
                        "showInstituteName",
                        element.showInstituteName === "yes" ? "no" : "yes"
                      )
                    }
                  />
                </div>
                <div className="flex mb-2">
                  <label className="text-sm text-gray-600 me-2">
                    Show Course Name:
                  </label>
                  <input
                    type="checkbox"
                    value={element.showCourseName}
                    checked={element.showCourseName == "yes"}
                    className="mt-1 block border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                    onChange={() =>
                      handleInputChange(
                        "showCourseName",
                        element.showCourseName === "yes" ? "no" : "yes"
                      )
                    }
                  />
                </div>
                <div className="flex mb-2">
                  <label className="text-sm text-gray-600 me-2">
                    Show Start And Ending Date:
                  </label>
                  <input
                    type="checkbox"
                    checked={element.showEducationStartOrEndDate == "yes"}
                    value={element.showEducationStartOrEndDate}
                    className="mt-1 block border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                    onChange={() =>
                      handleInputChange(
                        "showEducationStartOrEndDate",
                        element.showEducationStartOrEndDate === "yes"
                          ? "no"
                          : "yes"
                      )
                    }
                  />
                </div>
              </>
            ) : (
              <select
                onChange={(e) =>
                  handleInputChange("educationTemplateString", e.target.value)
                }
                value={element.educationTemplateString}
              >
                {educationDropdownOptions.map(
                  (educationDropdownOption, key) => (
                    <option value={educationDropdownOption} key={key}>
                      {educationDropdownOption}
                    </option>
                  )
                )}
              </select>
            )}
          </div>
        </div>
      )}
      {element.sectionType === sectionType.employment && (
        <div className="w-full space-y-2 pt-2">
          <span className="text-sm font-semibold text-gray-700 me-2">
            Employment :
          </span>
          <select
            onChange={(e) => {
              handleInputChange("employmentTemplate", e.target.value);
            }}
            value={element.employmentTemplate}
          >
            <option value="default">Use Default</option>
            <option value="template">Template</option>
          </select>
          <div className="w-full grid grid-cols-1  bg-gray-100 rounded-md p-2">
            {element.employmentTemplate === "default" ? (
              <>
                <div className="flex mb-2">
                  <label className="text-sm text-gray-600 me-2">
                    Show Comany Name :
                  </label>
                  <input
                    type="checkbox"
                    value={element.showOrganizationName}
                    checked={element.showOrganizationName == "yes"}
                    className="mt-1 block border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                    onChange={() =>
                      handleInputChange(
                        "showOrganizationName",
                        element.showOrganizationName === "yes" ? "no" : "yes"
                      )
                    }
                  />
                </div>
                <div className="flex mb-2">
                  <label className="text-sm text-gray-600 me-2">
                    Show Your Role in Company:
                  </label>
                  <input
                    type="checkbox"
                    value={element.showRoleInCompany}
                    checked={element.showRoleInCompany == "yes"}
                    className="mt-1 block border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                    onChange={() =>
                      handleInputChange(
                        "showRoleInCompany",
                        element.showRoleInCompany === "yes" ? "no" : "yes"
                      )
                    }
                  />
                </div>
                <div className="flex mb-2">
                  <label className="text-sm text-gray-600 me-2">
                    Show Start And Ending Date:
                  </label>
                  <input
                    type="checkbox"
                    checked={element.showCompanyStartOrEndDate == "yes"}
                    value={element.showCompanyStartOrEndDate}
                    className="mt-1 block border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                    onChange={() =>
                      handleInputChange(
                        "showCompanyStartOrEndDate",
                        element.showCompanyStartOrEndDate === "yes"
                          ? "no"
                          : "yes"
                      )
                    }
                  />
                </div>
              </>
            ) : (
              <select
                onChange={(e) =>
                  handleInputChange("employmentTemplateString", e.target.value)
                }
                value={element.employmentTemplateString}
              >
                {employmentDropdownOptions.map(
                  (employmentDropdownOption, key) => (
                    <option value={employmentDropdownOption} key={key}>
                      {employmentDropdownOption}
                    </option>
                  )
                )}
              </select>
            )}
          </div>
        </div>
      )}
      {element.sectionType === sectionType.summary && (
        <div className="w-full">
          {/* Heading */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Professional Summary
          </h3>

          {/* Textarea */}
          <textarea
            placeholder="Write a brief summary of your professional background..."
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            rows={4}
            value={element?.data?.summary}
            onChange={(e) =>
              handleInputChange("data", {
                ...element.data,
                summary: e.target.value,
              })
            }
          />

          {/* Button Section */}
          <div className="flex items-center gap-4 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              onClick={generatePrompt}
            >
              {isAILoading ? "saving..." : " Generate Suggestions"}
            </button>
            <button
              className={`${
                isloadingUpdate
                  ? "bg-green-400"
                  : "bg-green-500 hover:bg-green-600"
              } text-white px-4 py-2 rounded-lg transition-colors duration-300`}
              onClick={onSubmit}
              disabled={isloadingUpdate}
            >
              {isloadingUpdate ? "Saving..." : "Save"}
            </button>
          </div>

          {/* AI Suggestions Section */}
          {aiSuggetions.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                AI Suggestions
              </h4>
              <ul className="space-y-3">
                {aiSuggetions.map((aiSuggetion, key) => (
                  <li
                    key={key}
                    className="p-3 bg-gray-100 border border-gray-200 rounded-lg flex items-center"
                  >
                    <div className="text-gray-800 flex-1">
                      {aiSuggetion.text}
                    </div>
                    <button
                      className="ml-4 text-blue-500 hover:underline text-sm"
                      onClick={() => handleSelectSuggestion(aiSuggetion.text)}
                    >
                      Use this
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {element.sectionType === sectionType.skills && (
        <div className="w-full">
          <span className="text-sm font-semibold text-gray-700 me-2">
            Auto Layout
          </span>
          <div className="w-full grid grid-cols-2 space-y-2  bg-gray-100 rounded-md p-2">
            <span className="text-sm font-semibold text-gray-700 me-2">
              Direction
            </span>
            <div className="flex">
              {[
                {
                  label: "Horizontal",
                  value: "column",
                  icon: (
                    <MdOutlineArrowDownward
                      size={20}
                      onClick={() =>
                        handleInputChange("listDirection", "column")
                      }
                    />
                  ),
                },
                {
                  label: "Verticle",
                  value: "row",
                  icon: (
                    <MdOutlineArrowRightAlt
                      size={20}
                      onClick={() => handleInputChange("listDirection", "row")}
                    />
                  ),
                },
                {
                  label: "Wrap",
                  value: "wrap",
                  icon: (
                    <IoReturnDownBack
                      size={20}
                      onClick={() => handleInputChange("listDirection", "wrap")}
                    />
                  ),
                },
              ].map((list, key) => (
                <>
                  <div
                    key={key}
                    className={`flex items-center justify-center space-x-2 w-[30px] h-[30px] ${
                      element.listDirection === list.value
                        ? "bg-gray-800"
                        : "bg-gray-500"
                    } text-white`}
                  >
                    {list.icon}
                  </div>
                </>
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700 me-2">
              Alignment
            </span>
            <div className="grid grid-cols-3">
              {[
                {
                  label: "Start",
                  value: "flex-start",
                },
                {
                  label: "Between",
                  value: "space-between",
                },
                {
                  label: "End",
                  value: "flex-end",
                },
              ].map((list, key) => (
                <>
                  <div
                    key={key}
                    className={`flex items-center justify-center w-[30px] h-[30px] ${
                      element.listAlignment === list.value
                        ? "bg-gray-800"
                        : "bg-gray-500"
                    } text-white`}
                    onClick={() =>
                      handleInputChange("listAlignment", list.value)
                    }
                  >
                    .
                  </div>
                </>
              ))}
            </div>
          </div>
          {/* <input
              type="number"
              min="10"
              max="36"
              defaultValue="16"
              className="w-16 px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            /> */}
        </div>
      )}
      {element.sectionType === sectionType.profileImage && roleName && (
        <>
          {roleName === "admin" && (
            <IconifySearch onIconSelect={onIconSelect} />
          )}
          {roleName === "utilizer" && (
            <div className="w-full grid grid-cols-1 space-y-2 bg-gray-100 rounded-md p-2 mt-2">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <label className="text-sm font-semibold text-gray-700">
                  Color:
                </label>
                <input
                  type="color"
                  name="IconColor"
                  className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                  value={element.IconColor}
                  onChange={(e) =>
                    handleInputChange("IconColor", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <label className="text-sm font-semibold text-gray-700">
                  Background Color:
                </label>
                <input
                  type="color"
                  name="SectionBgColor"
                  className="w-10 h-10 border-none rounded-full cursor-pointer shadow-inner"
                  value={element.SectionBgColor}
                  onChange={(e) =>
                    handleInputChange("SectionBgColor", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <label className="text-sm font-semibold text-gray-700">
                  Upload Image:
                </label>
                <input
                  type="file"
                  name="imageUrl"
                  className="h-10 w-40 cursor-pointer shadow-inner"
                  onChange={(e) =>
                    handleInputChange("imageUrl", e.target.value)
                  }
                />
              </div>
              <img src={element.data.image} />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default SectionElement;
