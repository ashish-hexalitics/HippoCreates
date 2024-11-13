import React from "react";

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
  listProperties: {
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
      listStyleType: "circle",
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
  listProperties: {
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

const Section: React.FC<any> = ({ element, elements, handleContentChange }) => {
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
              [element.SectionBorder]:
                element.SectionBorderWidth +
                "px solid " +
                element.SectionBorderColor,
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
      ...(element.sectionType === "Contact"
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
              [element.SectionBorder]:
                element.SectionBorderWidth +
                "px solid " +
                element.SectionBorderColor,
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
              [element.SectionBorder]:
                element.SectionBorderWidth +
                "px solid " +
                element.SectionBorderColor,
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
                textDecoration: element.SectionLabelUnderline,
              },
            },
            listProperties: {
              ...Education.listProperties,
              style: {
                color: element.listItemsColor,
                fontSize: `${element.listItemsFontSize}px`,
                fontWeight: element.listItemsFontWeight,
                textDecoration: element.listItemTextDecoration,
                listStyleType: element.listItemType || "circle",
              },
            },
            style: {
              ...Education.style,
              [element.SectionBorder]:
                element.SectionBorderWidth +
                "px solid " +
                element.SectionBorderColor,
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
            listProperties: {
              ...Employment.listProperties,
              style: {
                color: element.listItemsColor,
                fontSize: `${element.listItemsFontSize}px`,
                fontWeight: element.listItemsFontWeight,
                textDecoration: element.listItemTextDecoration,
                listStyleType: element.listItemType || "circle",
              },
            },
            style: {
              ...Employment.style,
              [element.SectionBorder]:
                element.SectionBorderWidth +
                "px solid " +
                element.SectionBorderColor,
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
                element.SectionBorderWidth +
                "px solid " +
                element.SectionBorderColor,
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


  return (
    <div>
      {customElement.sectionType === "Contact" && (
        <div className="w-full" style={customElement.section.style}>
          <h3
            onBlur={(e) =>
              handleContentChange && handleContentChange(e, customElement.id)
            }
            style={customElement.section.lableProperties.style}
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
              <div className="flex items-center">
                {element.showDot && (
                  <div
                    className={`me-2  rounded-full`}
                    style={{
                      width: `calc(${customElement.section.lableProperties.style.fontSize} - 9px)`,
                      height: `calc(${customElement.section.lableProperties.style.fontSize} - 9px)`,
                      backgroundColor:
                        customElement.section.lableProperties.style.color,
                    }}
                  ></div>
                )}
                <h3
                  style={customElement.section.lableProperties.style}
                  className="flex"
                >
                  {customElement.section.lableProperties.lable}
                </h3>
              </div>
            )}
            {customElement.section.showEducation && (
              <>
                <ul
                  style={{
                    marginLeft:
                      customElement.section.listProperties.style
                        .listStyleType === "none"
                        ? "0"
                        : `18px`,
                    listStyleType:
                      customElement.section.listProperties.style.listStyleType,
                  }}
                >
                  {customElement.section.listProperties.educations &&
                    customElement.section.listProperties.educations.map(
                      (education: any, key: string) => {
                        return (
                          <li
                            key={key}
                            style={customElement.section.listProperties.style}
                          >
                            <span>{education.institution}</span>
                            <span>{education.degree}</span>
                          </li>
                        );
                      }
                    )}
                </ul>
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
                {customElement.section.listProperties.employments &&
                  customElement.section.listProperties.employments.map(
                    (employment: any, key: string) => {
                      return (
                        <ul key={key}>
                          <li
                            style={
                              customElement.section.listProperties.style
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
