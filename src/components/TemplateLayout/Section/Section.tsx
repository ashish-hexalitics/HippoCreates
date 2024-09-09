import React from "react";
// import { Rnd } from "react-rnd";

const Summary = {
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

const Education = {
  showSection: true,
  sectionType: "Education",
  showLabel: true,
  showEducation: true,
  style: {
    width: "100%",
    height: "100%",
    backgroundColor: "",
    padding: 0,
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  lableProperties: {
    lable: "Education",
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      padding: "",
    },
  },
  educationProperties: {
    educations: [
      {
        degree: "Bachelor of Science",
        institution: "XYZ University",
        startDate: "2000-01-01",
        endDate: "2005-12-31",
      },
      {
        degree: "Master of Science",
        institution: "ABC University",
        startDate: "2006-01-01",
        endDate: "2010-12-31",
      },
    ],
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      listStyle: "circle",
      display: "flex",
      flexDirection: "column",
      padding: "",
    },
  },
};

const Employment = {
  showSection: true,
  sectionType: "Employment",
  showLabel: true,
  showEmployment: true,
  style: {
    width: "100%",
    height: "100%",
    backgroundColor: "",
    padding: 0,
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  },
  lableProperties: {
    lable: "Employment",
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      padding: "",
    },
  },
  employmentProperties: {
    employments: [
      {
        company: "XYZ Company",
        position: "Software Engineer",
        startDate: "2010-01-01",
        endDate: "2015-12-31",
      },
      {
        company: "ABC Company",
        position: "Senior Software Engineer",
        startDate: "2016-01-01",
        endDate: "2020-12-31",
      },
    ],
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      listStyle: "circle",
      display: "flex",
      flexDirection: "column",
      padding: "",
    },
  },
};

const Skills = {
  showSection: true,
  sectionType: "Skills",
  showLabel: true,
  showSkill: true,
  style: {
    width: "100%",
    height: "100%",
    backgroundColor: "",
    padding: 0,
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  },
  lableProperties: {
    lable: "Skills",
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      padding: "",
    },
  },
  skillProperties: {
    skills: [
      {
        name: "JavaScript",
      },
      {
        name: "React",
      },
    ],
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      listStyle: "circle",
      display: "flex",
      flexDirection: "column",
      padding: "",
    },
  },
};

const Section: React.FC<any> = ({ element }) => {
  const customElement: any = {
    ...element,
    section: {
      ...(element.sectionType === "Summary" ? Summary : {}),
      ...(element.sectionType === "Education" ? Education : {}),
      ...(element.sectionType === "Employment" ? Employment : {}),
      ...(element.sectionType === "Skills" ? Skills : {}),
    },
  };
  return (
    <div>
      {/* group w-full relative flex flex-col border-2 border-blue-500 mt-2 overflow-hidden hover:border-yellow-500 p-4 bg-white rounded-md */}
      {/* Contact Section */}
      {customElement.sectionType === "Contact" && (
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Contact Information
          </h3>
          <label className="block mb-2">
            <span className="text-sm text-gray-600">Name:</span>
          </label>
          <label className="block">
            <span className="text-sm text-gray-600">Email:</span>
          </label>
        </div>
      )}

      {/* Education Section */}
      {customElement.sectionType === "Education" &&
        customElement.section.showSection && (
          <div style={customElement.section.style}>
            {customElement.section.showLabel && (
              <h3 style={customElement.section.lableProperties.style}>
                {customElement.section.lableProperties.lable}
              </h3>
            )}
            {customElement.section.showEducation && (
              <>
                {customElement.section.educationProperties.educations &&
                  customElement.section.educationProperties.educations.map(
                    (education: any, key: string) => {
                      return (
                        <ul key={key}>
                          <li
                            style={
                              customElement.section.educationProperties.style
                            }
                          >
                            <span>{education.institution}</span>
                            <span>{education.degree}</span>
                          </li>
                        </ul>
                      );
                    }
                  )}
              </>
            )}
          </div>
        )}

      {customElement.sectionType === "Employment" &&
        customElement.section.showSection && (
          <div style={customElement.section.style}>
            {customElement.section.showLabel && (
              <h3 style={customElement.section.lableProperties.style}>
                {customElement.section.lableProperties.lable}
              </h3>
            )}
            {customElement.section.showEmployment && (
              <>
                {customElement.section.employmentProperties.employments &&
                  customElement.section.employmentProperties.employments.map(
                    (employment: any, key: string) => {
                      return (
                        <ul key={key}>
                          <li
                            style={
                              customElement.section.employmentProperties.style
                            }
                          >
                            <span>{employment.company}</span>
                            <span>{employment.position}</span>
                          </li>
                        </ul>
                      );
                    }
                  )}
              </>
            )}
          </div>
        )}

      {/* Summary Section */}
      {customElement.sectionType === "Summary" &&
        customElement.section.showSection && (
          <div style={customElement.section.style}>
            {customElement.section.showLabel && (
              <h3 style={customElement.section.lableProperties.style}>
                {customElement.section.lableProperties.lable}
              </h3>
            )}
            {customElement.section.showSummary && (
              <p style={customElement.section.summaryProperties.style}>
                {customElement.section.summaryProperties.value}
              </p>
            )}
          </div>
        )}

      {/* Skills Section */}
      {customElement.sectionType === "Skills" &&
        customElement.section.showSection && (
          <div style={customElement.section.style}>
            {customElement.section.showLabel && (
              <h3 style={customElement.section.lableProperties.style}>
                {customElement.section.lableProperties.lable}
              </h3>
            )}
            {customElement.section.showSkill && (
              <ul style={customElement.section.skillProperties.style}>
                {customElement.section.skillProperties.skills &&
                  customElement.section.skillProperties.skills.map(
                    (skill: any, key: string) => {
                      return (
                        <li
                          key={key}
                          style={customElement.section.skillProperties.style}
                        >
                          <span>{skill.name}</span>
                        </li>
                      );
                    }
                  )}
              </ul>
            )}
          </div>
        )}

      {/* Custom Section */}
      {customElement.sectionType === "CustomSection" && (
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Custom Section
          </h3>
        </div>
      )}
    </div>
  );
};

export default Section;
