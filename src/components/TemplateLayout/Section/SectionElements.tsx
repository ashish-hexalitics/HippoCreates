import React from "react";

const sectionOptions: { label: string; tag: string; sectionType: string }[] = [
  { label: "Add Contact Section", tag: "section", sectionType: "Contact" },
  { label: "Add Education Section", tag: "section", sectionType: "Education" },
  { label: "Add Employment Section", tag: "section", sectionType: "Employment" },
  { label: "Add Summary Section", tag: "section", sectionType: "Summary" },
  { label: "Add Skills Section", tag: "section", sectionType: "Skills" },
  { label: "Add Your Custom Section", tag: "section", sectionType: "CustomSection" },
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
