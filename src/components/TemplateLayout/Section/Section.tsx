import React from "react";
import DynamicEducationSection from "./DynamicEducationSection";

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
    summary:
      "lorem Ipsum is just rep elit sed diam non pro id elit. Lorem Ipsum",
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
  showEducationStartOrEndDate: "yes",
  showInstituteName: "yes",
  showCourseName: "yes",
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
  listProperties: {
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

const ContactSection = {
  showSection: true,
  sectionType: "Contact",
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
    lable: "Contact Information",
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      padding: "",
    },
  },
  contactProperties: {
    contactDetail: {
      firstName: "john",
      lastName: "doe",
      country: "India",
      city: "New York",
      state: "NY",
      zipCode: "12345",
      email: "john@gmail.com",
      otherEmail: "johnOtherMail@gmail.com",
      phone: "1234567891",
    },
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
const Section: React.FC<any> = ({ element }) => {
  console.log(element);
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
                textAlign: element.SectionTextAlignMent,
                textDecoration: element.SectionLabelUnderline,
                listStyleType: element.listItemType || "circle",
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
            ...ContactSection,
            lableProperties: {
              ...ContactSection.lableProperties,
              style: {
                ...ContactSection.lableProperties.style,
                color: element.labelsColor,
                fontSize: `${element.labelsFontSize}px`,
                fontWeight: element.labelsFontWeight,
                textAlign: element.SectionTextAlignMent,
                textDecoration: element.SectionLabelUnderline,
                listStyleType: element.listItemType || "circle",
              },
            },
            contactProperties: {
              ...ContactSection.contactProperties,
              contactDetail:
                element.data && element.data
                  ? element.data
                  : ContactSection.contactProperties.contactDetail,
              style: {
                ...ContactSection.contactProperties.style,
                color: element.labelsColor,
                fontSize: `${element.labelsFontSize}px`,
                fontWeight: element.labelsFontWeight,
                textAlign: "left",
                textDecoration: element.SectionLabelUnderline,
              },
            },
            style: {
              ...ContactSection.style,
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
                textDecoration: element.SectionLabelUnderline,
                listStyleType: element.listItemType || "circle",
              },
            },
            summaryProperties: {
              ...Summary.summaryProperties,
              summary:
                element.data && element.data.length
                  ? element.data
                  : Summary.summaryProperties.summary,
              style: {
                ...Summary.summaryProperties.style,
                color: element.labelsColor,
                fontSize: `${element.labelsFontSize}px`,
                fontWeight: element.labelsFontWeight,
                textAlign: "left",
                textDecoration: element.SectionLabelUnderline,
                listStyleType: element.listItemType || "circle",
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
            showInstituteName: element.showInstituteName,
            showCourseName: element.showCourseName,
            showEducationStartOrEndDate: element.showEducationStartOrEndDate,
            lableProperties: {
              ...Education.lableProperties,
              style: {
                ...Education.style,
                color: element.labelsColor,
                textAlign: element.SectionTextAlignMent,
                fontWeight: element.labelsFontWeight,
                fontSize: `${element.labelsFontSize}px`,
                listStyleType: element.listItemType || "circle",
                textDecoration: element.SectionLabelUnderline,
              },
            },
            listProperties: {
              ...Education.listProperties,
              educations:
                element.data && element.data.length
                  ? element.data
                  : Education.listProperties.educations,
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
                ...Employment.style,
                color: element.labelsColor,
                textAlign: "left",
                fontWeight: element.labelsFontWeight,
                fontSize: `${element.labelsFontSize}px`,
                textDecoration: element.SectionLabelUnderline,
                listStyleType: element.listItemType || "circle",
              },
            },
            listProperties: {
              ...Employment.listProperties,
              employments:
                element.data && element.data.length
                  ? element.data
                  : Employment.listProperties.employments,
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
                textDecoration: element.SectionLabelUnderline,
                listStyleType: element.listItemType || "circle",
              },
            },
            listProperties: {
              ...Skills.listProperties,
              style: {
                color: element.listItemsColor,
                fontSize: `${element.listItemsFontSize}px`,
                fontWeight: element.listItemsFontWeight,
                textDecoration: element.listItemTextDecoration,
                listStyleType: element.listItemType || "circle",
                marginRight: "18px",
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

  const formatString = (template: any, values: any) => {
    return template.replace(
      /{(.*?)}/g,
      (_: string, key: string) => values[key] || ""
    );
  };

  return (
    <div>
      <div className="w-full" style={customElement.section.style}>
        {/* Common Labels */}
        {customElement.section.showLabel && (
          <div className="flex items-center">
            {element.showDot === "dot" && (
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
        {/* Contact Section */}
        {customElement.sectionType === "Contact" &&
          customElement.section.contactProperties.contactDetail && (
            <>
              <label className="block mb-2">
                <span className="text-sm text-gray-600">
                  Name : {" "}
                  {customElement.section.contactProperties.contactDetail
                    .firstName +
                    " " +
                    customElement.section.contactProperties.contactDetail
                      .lastName}
                </span>
              </label>
              <label className="block">
                <span className="text-sm text-gray-600">
                  Email : {" "}
                  {
                    customElement.section.contactProperties.contactDetail
                      .otherEmail
                  }
                </span>
              </label>
            </>
          )}
        {/* Education Section */}
        {customElement.sectionType === "Education" &&
          customElement.section.showSection && (
            <DynamicEducationSection
              element={element}
              customElement={customElement}
            />
          )}
        {/* Employment Section */}
        {customElement.sectionType === "Employment" &&
          customElement.section.showSection && (
            <>
              <ul
                style={{
                  marginLeft:
                    customElement.section.listProperties.style.listStyleType ===
                    "none"
                      ? "0"
                      : `18px`,
                  listStyleType:
                    customElement.section.listProperties.style.listStyleType,
                }}
              >
                {customElement.section.showEmployment && (
                  <>
                    {customElement.section.listProperties.employments &&
                      customElement.section.listProperties.employments.map(
                        (employment: any, key: string) => {
                          return (
                            <li
                              key={key}
                              style={customElement.section.listProperties.style}
                            >
                              <span>{employment.company}</span>
                              <span>{employment.position}</span>
                            </li>
                          );
                        }
                      )}
                  </>
                )}
              </ul>
            </>
          )}
        {/* Summary Section */}
        {customElement.sectionType === "Summary" &&
          customElement.section.showSection && (
            <>
              {customElement.section.showSummary && (
                <p style={customElement.section.summaryProperties.style}>
                  {customElement.section.summaryProperties.summary}
                </p>
              )}
            </>
          )}
        {/* Skills Section */}
        {customElement.sectionType === "Skills" &&
          customElement.section.showSection && (
            <>
              {customElement.section.showSkill && (
                <>
                  <ul
                    style={{
                      marginLeft:
                        customElement.section.listProperties.style
                          .listStyleType === "none"
                          ? "0"
                          : `18px`,
                      display: "flex",
                      flexDirection: element.listDirection,
                      flexWrap:
                        element.listDirection === "wrap" ? "wrap" : "nowrap",
                      justifyContent: element.listAlignment,
                      alignItems: element.listAlignment,
                    }}
                  >
                    {customElement.section.listProperties.skills &&
                      customElement.section.listProperties.skills.map(
                        (skill: any, key: string) => {
                          return (
                            <li
                              key={key}
                              style={customElement.section.listProperties.style}
                            >
                              <span>{skill.name}</span>
                            </li>
                          );
                        }
                      )}
                  </ul>
                </>
              )}
            </>
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
    </div>
  );
};

export default Section;
