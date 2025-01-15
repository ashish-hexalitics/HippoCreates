function DynamicEducationSection({ customElement, element }: any) {
  const formatString = (template: any, values: any) => {
    return template.replace(/{(.*?)}/g, (_: string, key: string) => {
      if (values[key]) {
        if (key.includes("Date") && values[key].includes("T")) {
          return formatDate(values[key], "{YYYY}-{MM}-{DD}");
        }
        return values[key];
      }
      return "";
    });
  };
  const formatDate = (
    dateString: string,
    template: string = "{YYYY}-{MM}-{DD}"
  ): string => {
    const date = new Date(dateString);

    const values: Record<string, string> = {
      YYYY: date.getUTCFullYear().toString(),
      MM: String(date.getUTCMonth() + 1).padStart(2, "0"), // Months are 0-based
      DD: String(date.getUTCDate()).padStart(2, "0"),
      HH: String(date.getUTCHours()).padStart(2, "0"),
      mm: String(date.getUTCMinutes()).padStart(2, "0"),
      ss: String(date.getUTCSeconds()).padStart(2, "0"),
    };

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
                      {!formattedString &&
                        customElement.showInstituteName === "yes" && (
                          <>
                            <span>{education.institution}</span>
                            {customElement?.section?.showInstituteName ===
                              "yes" && <span>{education.degree}&nbsp;</span>}
                            {customElement?.section
                              .showEducationStartOrEndDate === "yes" && (
                              <>
                                (<span>{formatDate(education.startDate)}</span>
                                &nbsp;-&nbsp;
                                <span>{formatDate(education.endDate)}</span>)
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
