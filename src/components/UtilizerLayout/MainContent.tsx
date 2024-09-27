import React from "react";

function MainContent({ children }: { children: React.ReactElement }) {
  return (
    <div
      className="h-full flex-col overflow-y-scroll w-full sm:w-full lg:w-[calc(100%-60px)] md:w-[calc(100%-60px)]"
    >
      {children}
    </div>
  );
}

export default MainContent;
