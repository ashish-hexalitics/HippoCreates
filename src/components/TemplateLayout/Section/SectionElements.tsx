import React from "react";
import { useNavigate } from "react-router-dom";
import {
  updateGlobalColorStyle,
  updateTemplateColorSwitch,
} from "../../../store/slices/resumeTemplateSlice/resumeDetailSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

const colors = {
  primary: "bg-blue-500",
  primaryHover: "bg-blue-600",
  secondary: "bg-yellow-500",
  secondaryHover: "bg-yellow-600",
  textPrimary: "text-gray-600",
  textSecondary: "text-gray-100",
};

const section = {
  showSection: true,
  sectionType: "summary",
  showLabel: true,
  showSummary: true,
  style: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    padding: 0,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  lableProperties: {
    lable: "Professional Summary",
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      padding: "",
    },
  },
  summaryProperties: {
    value: "lorem Ipsum is just rep elit sed diam non pro id elit. Lorem Ipsum",
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      padding: "",
    },
  },
};

const sectionOptions: {
  label: string;
  tag: string;
  sectionType: string;
  section?: any;
  key?: any;
}[] = [
  {
    label: "Add Contact Section",
    tag: "section",
    sectionType: "Contact",
    key: "data.userInfo",
  },
  {
    label: "Add Education Section",
    tag: "section",
    sectionType: "Education",
    key: "data.educations",
  },
  {
    label: "Add Employment Section",
    tag: "section",
    sectionType: "Employment",
    key: "data.employments",
  },
  {
    label: "Add Summary Section",
    tag: "section",
    sectionType: "Summary",
    key: "data.userInfo",
  },
  {
    label: "Add Skills Section",
    tag: "section",
    sectionType: "Skills",
    section: section,
    key: "data.skills",
  },
  {
    label: "Add Profile Image",
    tag: "section",
    sectionType: "ProfileImage",
    key: "data.user",
  },
  {
    label: "Add Your Custom Section",
    tag: "section",
    sectionType: "CustomSection",
    key: "data.userInfo",
  },
];

const SectionElement: React.FC<any> = ({
  addSection,
  roleName,
}: {
  addSection?: (el: { label: string; tag: string }) => void;
  roleName: string | null;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const configration = useAppSelector(
    (state) => state.resumeDetailSlice.configration
  );

  const handleChangeTemplate = () => {
    localStorage.removeItem("categoryId");
    localStorage.removeItem("templateId");
    navigate("/choose-resume");
  };

  const handleChangeColor = (color: string) => {
    dispatch(
      updateGlobalColorStyle(
        configration.globalColorStyle === color ? "" : color
      )
    );
  };

  return (
    <div className="grid gap-4 w-full ">
      {sectionOptions.map((section: { label: string; tag: string }, key) => (
        <div
          key={key}
          className={`group relative flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${colors.primaryHover}`}
        >
          <div
            className={`py-3  w-full text-center cursor-pointer ${colors.primary} ${colors.textSecondary} rounded-lg hover:${colors.secondary} hover:${colors.textPrimary} transition-all duration-200`}
          >
            {section.label}
          </div>
          <div
            onClick={() => {
              addSection && addSection(section);
            }}
            className="absolute inset-0 cursor-pointer bg-blue-200 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          ></div>
        </div>
      ))}
      <div className="flex flex-col mb-2 space-y-4">
        <p className="font-bold text-gray-700">Use Global Color:</p>
        <div className="flex  space-x-2 mt-2">
          {[
            "blue",
            "green",
            "red",
            "yellow",
            "purple",
            "orange",
            "pink",
            "gray",
          ].map((color) => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full border-2 ${
                configration.globalColorStyle === color
                  ? "border-black"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleChangeColor(color)}
            />
          ))}
        </div>
        <select
          name="templateColorSwitch"
          className="block w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          value={configration.templateColorSwitch}
          onChange={(e) => {
            dispatch(updateTemplateColorSwitch(e.target.value));
          }}
        >
          <option value="previous">Switch to previous</option>
          <option value="global">Switch to global color</option>
        </select>
      </div>
      <h2>*global logic will here</h2>
      {roleName && roleName === "" && (
        <button onClick={handleChangeTemplate}>Change Template</button>
      )}
    </div>
  );
};

export default SectionElement;
