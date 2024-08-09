import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";

function MainContent({
  children,
  path,
  breadcrumb,
  showBreadcrumb = false,
}: {
  children: React.ReactElement;
  path: string;
  breadcrumb: string[];
  showBreadcrumb?: Boolean;
}) {
  const [sideBar, setSideBar] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setSideBar(false);
    }
  }, [window.innerWidth]);

  return showBreadcrumb ? (
    <div
      style={{ width: sideBar ? "calc(100% - 300px)" : "100%" }}
      className="h-full flex-col overflow-y-scroll"
    >
      {breadcrumb && <Breadcrumb title={path} breadcrumb={breadcrumb} />}
      {children}
    </div>
  ) : (
    ""
  );
}

export default MainContent;
