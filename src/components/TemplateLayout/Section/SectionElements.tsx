import React from "react";

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
}: {
  addSection?: (el: { label: string; tag: string }) => void;
}) => {
  return (
    <div className="w-full">
      <div className="space-y-2">
        {sectionOptions.map((section: { label: string; tag: string }, key) => (
          <div
            key={key}
            className="group relative flex border-2 border-blue-500 mt-2 overflow-hidden hover:border-yellow-500"
          >
            <div
              className="py-2 px-4 text-gray-600 bg-gray-100 cursor-pointer rounded-md"
              onClick={() => {
                addSection && addSection(section);
              }}
            >
              {section.label}
            </div>
            {/* <div className="absolute inset-0 bg-yellow-200 opacity-35 w-full h-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionElement;
