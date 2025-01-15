import React from "react";
import DynamicEducationSection from "./DynamicEducationSection";
import DynamicEmployementSection from "./DynamicEmployementSection";
import { sectionType } from "../../../constant/sectionType";
import Icons from "../Icons/Icon";

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
  personalDetailFields: [
    { label: "First Name", name: "firstName", showField: false },
    { label: "Last Name", name: "lastName", showField: false },
    { label: "Name", name: "name", showField: false },
    { label: "Email", name: "email", showField: false },
    { label: "Phone", name: "phone", showField: false },
    { label: "Address", name: "address", showField: false },
    { label: "Gender", name: "gender", showField: false },
    { label: "Married Status", name: "marriedStatus", showField: false },
  ],
  contactProperties: {
    alignPersonalDetailGrid: 3,
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
      display: "grid",
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

const ProfileImageSection = {
  showSection: true,
  sectionType: "ProfileImage",
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
  iconProperties: {
    lable: "Upload Image",
    ProfileIcon: "iconify~gg:profile",
    style: {
      color: "",
      textAlign: "",
      fontWeight: "",
      textDecoration: "",
      padding: "",
    },
  },
  imageProperties: {
    imageUrl: "https://example.com/image1.jpg",
    // https://via.placeholder.com/150
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

const Section: React.FC<any> = ({ element,configration }) => {
  const customElement: any = {
    ...element,
    section: {
      ...(element.sectionType === sectionType.customSection
        ? {
            ...CustomSection,
            lableProperties: {
              ...CustomSection.lableProperties,
              style: {
                ...CustomSection.lableProperties.style,
                color: element.labelsColor,
                // color: configration.globalColorStyle
                //   ? configration.globalColorStyle
                //   : element.labelsColor,
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
      ...(element.sectionType === sectionType.contact
        ? {
            ...ContactSection,
            lableProperties: {
              ...ContactSection.lableProperties,
              style: {
                ...ContactSection.lableProperties.style,
                // color: element.labelsColor,
                color: configration.globalColorStyle
                ? configration.globalColorStyle
                : element.labelsColor,
                fontSize: `${element.labelsFontSize}px`,
                fontWeight: element.labelsFontWeight,
                textAlign: element.SectionTextAlignMent,
                textDecoration: element.SectionLabelUnderline,
                listStyleType: element.listItemType || "circle",
              },
            },
            contactProperties: {
              ...ContactSection.contactProperties,
              ...(element?.alignPersonalDetailGrid
                ? {
                    alignPersonalDetailGrid: Number(
                      element?.alignPersonalDetailGrid
                    ),
                  }
                : {}),
              contactDetail:
                element.data && element.data
                  ? element.data
                  : ContactSection.contactProperties.contactDetail,
              style: {
                ...ContactSection.contactProperties.style,
                color: element.listItemsColor,
                fontSize: `${element.listItemsFontSize}px`,
                fontWeight: element.listItemsFontWeight,
                textAlign: "left",
                textDecoration: element.listItemTextDecoration,
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
      ...(element.sectionType === sectionType.summary
        ? {
            ...Summary,
            lableProperties: {
              ...Summary.lableProperties,
              style: {
                ...Summary.lableProperties.style,
                color: configration.globalColorStyle
                ? configration.globalColorStyle
                : element.labelsColor,
                // color: element.labelsColor,
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
                element.data && element.data.summary
                  ? element.data.summary
                  : Summary.summaryProperties.summary,
              style: {
                ...Summary.summaryProperties.style,
                color: element.listItemsColor,
                fontSize: `${element.listItemsFontSize}px`,
                fontWeight: element.listItemsFontWeight,
                // textAlign: "left",
                textDecoration: element.listItemTextDecoration,
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
      ...(element.sectionType === sectionType.education
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
      ...(element.sectionType === sectionType.employment
        ? {
            ...Employment,
            showOrganizationName: element.showOrganizationName,
            showRoleInCompany: element.showRoleInCompany,
            showCompanyStartOrEndDate: element.showCompanyStartOrEndDate,
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
      ...(element.sectionType === sectionType.skills
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
      ...(element.sectionType && sectionType.profileImage
        ? {
            ...ProfileImageSection,
            iconProperties: {
              ...ProfileImageSection.iconProperties,
              ProfileIcon: element?.ProfileIcon
                ? element?.ProfileIcon
                : ProfileImageSection.iconProperties.ProfileIcon,
              style: {
                ...ProfileImageSection.style,
                color: element?.IconColor,
                fontSize: `${element.labelsFontSize}px`,
              },
            },
            imageProperties: {
              ...ProfileImageSection.imageProperties,
              imageUrl: element?.data?.image
                ? element.data?.image
                : ProfileImageSection.imageProperties.imageUrl,
              style: {
                borderRadius: "",
                border: "2px solid #999",
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

  console.log(customElement.section?.lableProperties?.style,configration)
  return (
    <div>
      <div className="w-full" style={customElement.section.style}>
        {/* Common Labels */}
        {customElement.section.showLabel &&
          customElement.section?.lableProperties && (
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
                style={customElement.section?.lableProperties?.style}
                className="flex"
              >
                {customElement.section.lableProperties.lable}
              </h3>
            </div>
          )}
        {/* Contact Section */}
        {customElement.sectionType === sectionType.contact &&
          customElement.section.contactProperties.contactDetail && (
            <ul
              className={`w-full grid grid-cols-${customElement.alignPersonalDetailGrid}`}
            >
              {customElement?.personalDetailFields &&
                customElement?.personalDetailFields
                  .filter(
                    (detail: {
                      label: string;
                      name: string;
                      showField: boolean;
                    }) => detail.showField
                  )
                  .map(
                    (
                      detail: {
                        label: string;
                        name: string;
                        showField: boolean;
                      },
                      key: React.Key
                    ) => {
                      return (
                        <li
                          style={customElement.section.contactProperties.style}
                          key={key}
                        >
                          {detail.label} :
                          {
                            customElement.section.contactProperties
                              .contactDetail[detail.name]
                          }
                        </li>
                      );
                    }
                  )}
            </ul>
          )}
        {/* Education Section */}
        {customElement.sectionType === sectionType.education &&
          customElement.section.showSection && (
            <DynamicEducationSection
              element={element}
              customElement={customElement}
            />
          )}
        {/* Employment Section */}
        {customElement.sectionType === sectionType.employment &&
          customElement.section.showSection && (
            <DynamicEmployementSection
              element={element}
              customElement={customElement}
            />
          )}
        {/* Summary Section */}
        {customElement.sectionType === sectionType.summary &&
          customElement.section.showSection && (
            <>
              {customElement.section.showSummary && (
                <ul style={customElement.section.summaryProperties.style}>
                  <li style={customElement.section.summaryProperties.style}>
                    {customElement.section.summaryProperties.summary}
                  </li>
                </ul>
              )}
            </>
          )}
        {/* Skills Section */}
        {customElement.sectionType === sectionType.skills &&
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
        {customElement.sectionType === sectionType.customSection && (
          <div className="w-full">
            {customElement.section.showLabel && (
              <h3 style={customElement.section.lableProperties.style}>
                {customElement.section.lableProperties.lable}
              </h3>
            )}
          </div>
        )}
        {/* profileImage */}
        {customElement.sectionType === sectionType.profileImage && (
          <div className="w-full">
            {customElement.section.imageProperties.imageUrl ? (
              <img src={customElement.section.imageProperties.imageUrl} />
            ) : (
              <Icons
                element={{
                  ...element,
                  content: customElement.section.iconProperties.ProfileIcon,
                  width: customElement.section.iconProperties.style.fontSize,
                  height: customElement.section.iconProperties.style.fontSize,
                  color: customElement.section.iconProperties.style.color,
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
