// import React from 'react'

function DynamicEducationSection({ customElement, element }: any) {
  const formatString = (template: any, values: any) => {
    return template.replace(
      /{(.*?)}/g,
      (_: string, key: string) => values[key] || ""
    );
  };
  return (
    <>
      {customElement.section.showEducation && (
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
            {customElement.section.listProperties.educations &&
              customElement.section.showInstituteName === "yes" &&
              customElement.section.listProperties.educations.map(
                (education: any, key: string) => {
                  const val = element?.educationTemplateString;
                  const formattedString =
                    val &&
                    element.educationTemplate === "template" &&
                    formatString(val, education);
                  return (
                    <li
                      key={key}
                      style={customElement.section.listProperties.style}
                    >
                      {formattedString && formattedString}
                      {!formattedString && (
                        <>
                          <span>{education.institution}</span>
                          {customElement?.section?.showCourseName === "yes" && (
                            <span>{education.degree}</span>
                          )}
                          {customElement?.section
                            .showEducationStartOrEndDate === "yes" && (
                            <>
                              <span>{education.startDate}</span>
                              <span>{education.endDate}</span>
                            </>
                          )}
                        </>
                      )}
                    </li>
                  );
                }
              )}
          </ul>
        </>
      )}
    </>
  );
}

export default DynamicEducationSection;
