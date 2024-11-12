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

const CustomSection = {
  showSection: true,
  sectionType: "CustomSection",
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
    lable: "Custom Section",
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      padding: "",
    },
  },
  CustomProperties: {
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

const Section: React.FC<any> = ({ element, handleContentChange }) => {
  const customElement: any = {
    ...element,
    section: {
      ...(element.sectionType === "CustomSection"
        ? {
            ...CustomSection,
            lableProperties: {
              ...CustomSection.lableProperties,
              style: {
                ...CustomSection.lableProperties.style,
                color: element.labelsColor,
                fontSize: `${element.labelsFontSize}px`,
                fontWeight: element.labelsFontWeight,
                textDecoration: "",
                textAlign: element.SectionTextAlignMent,
              },
            },
            style: {
              ...CustomSection.style,
              textAlign: element.SectionTextAlignMent,
              [element.SectionBorder]: "1px solid " + element.labelsColor,
              ...(element.paddingPosition &&
              typeof element.paddingPosition === "string" &&
              typeof JSON.parse(element.paddingPosition) === "object"
                ? JSON.parse(element.paddingPosition)
                : {}),
              [element.paddingPosition]: `${element.paddingPx}px`,
              backgroundColor: element.SectionBgColor,
            },
          }
        : {}),
      ...(element.sectionType === "Summary"
        ? {
            ...Summary,
            lableProperties: {
              ...Summary.lableProperties,
              style: {
                ...Summary.lableProperties.style,
                color: element.labelsColor,
                fontSize: `${element.labelsFontSize}px`,
                fontWeight: element.labelsFontWeight,
                textAlign: "left",
                textDecoration: "",
              },
            },
            style: {
              ...Summary.style,
              [element.SectionBorder]: "1px solid " + element.labelsColor,
              ...(element.paddingPosition &&
              typeof element.paddingPosition === "string" &&
              Object.keys(JSON.parse(element.paddingPosition)) &&
              typeof JSON.parse(element.paddingPosition) === "object"
                ? JSON.parse(element.paddingPosition)
                : {}),
              [element.paddingPosition]: `${element.paddingPx}px`,
              textAlign: element.SectionTextAlignMent,
              backgroundColor: element.SectionBgColor,
            },
          }
        : {}),
      ...(element.sectionType === "Education"
        ? {
            ...Education,
            lableProperties: {
              ...Education.lableProperties,
              style: {
                ...Education.style,
                color: element.labelsColor,
                textAlign: element.SectionTextAlignMent,
                fontWeight: element.labelsFontWeight,
                fontSize: `${element.labelsFontSize}px`,
              },
            },
            style: {
              ...Education.style,
              [element.SectionBorder]: "1px solid " + element.labelsColor,
              ...(element.paddingPosition &&
              typeof element.paddingPosition === "string" &&
              Object.keys(JSON.parse(element.paddingPosition)) &&
              typeof JSON.parse(element.paddingPosition) === "object"
                ? JSON.parse(element.paddingPosition)
                : {}),
              [element.paddingPosition]: `${element.paddingPx}px`,
              textAlign: element.SectionTextAlignMent,
              backgroundColor: element.SectionBgColor,
            },
          }
        : {}),
      ...(element.sectionType === "Employment"
        ? {
            ...Employment,
            lableProperties: {
              ...Employment.lableProperties,
              style: {
                fontSize: `${element.labelsFontSize}px`,
                ...Employment.style,
                color: element.labelsColor,
                textAlign: "left",
                fontWeight: element.labelsFontWeight,
              },
            },
            style: {
              ...Employment.style,
              [element.SectionBorder]: "1px solid " + element.labelsColor,
              ...(element.paddingPosition &&
              typeof element.paddingPosition === "string" &&
              Object.keys(JSON.parse(element.paddingPosition)) &&
              typeof JSON.parse(element.paddingPosition) === "object"
                ? JSON.parse(element.paddingPosition)
                : {}),
              [element.paddingPosition]: `${element.paddingPx}px`,
              textAlign: element.SectionTextAlignMent,
              backgroundColor: element.SectionBgColor,
            },
          }
        : {}),
      ...(element.sectionType === "Skills"
        ? {
            ...Skills,
            lableProperties: {
              ...Skills.lableProperties,
              style: {
                ...Skills.style,
                color: element.labelsColor,
                textAlign: element.SectionTextAlignMent,
                fontWeight: element.labelsFontWeight,
                fontSize: `${element.labelsFontSize}px`,
              },
            },
            style: {
              ...Skills.style,
              [element.SectionBorder]:
                "1px solid " + element.labelsColor || "#000",
              ...(element.paddingPosition &&
              typeof element.paddingPosition === "string" &&
              Object.keys(JSON.parse(element.paddingPosition)) &&
              typeof JSON.parse(element.paddingPosition) === "object"
                ? JSON.parse(element.paddingPosition)
                : {}),
              textAlign: element.SectionTextAlignMent,
              backgroundColor: element.SectionBgColor,
            },
          }
        : {}),
    },
  };

  console.log(customElement);

  return (
    <div>
      {customElement.sectionType === "Contact" && (
        <div className="w-full" style={customElement.section.style}>
          <h3
            onBlur={(e) =>
              handleContentChange && handleContentChange(e, customElement.id)
            }
            style={{
              color:
                element.ShowlabelsColor === "onlyForThis"
                  ? customElement?.section?.lableProperties?.style?.color
                  : element.labelsColor,
            }}
          >
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
              <h3 
              // style={customElement.section.lableProperties.style}
              style={{
                ...customElement.section.lableProperties.style,
                color:
                  element.ShowlabelsColor === "onlyForThis"
                    ? customElement?.section?.lableProperties?.style?.color
                    : element.labelsColor,
              }}
              >
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
          {customElement.section.showLabel && (
            <h3 style={customElement.section.lableProperties.style}>
              {customElement.section.lableProperties.lable}
            </h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
