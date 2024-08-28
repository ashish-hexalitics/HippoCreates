import React from "react";

function MainContent({ children }: { children: React.ReactElement }) {
  return (
    <div
      style={{ width: "calc(100% - 60px)" }}
      className="h-full flex-col overflow-y-scroll"
    >
      {children}
    </div>
  );
}

export default MainContent;
