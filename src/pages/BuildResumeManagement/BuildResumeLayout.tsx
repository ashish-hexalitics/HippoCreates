// import React from 'react'
import MainContent from "../../components/UtilizerLayout/MainContent";
import StepBar from "../../components/UtilizerLayout/StepBar";
import { Route, Routes } from "react-router-dom";
import { utilizerRoutes } from "../../routes/routes";

function BuildResumeLayout() {
  return (
    <div className="h-screen w-screen bg-slate-100">
      <div  className="w-full h-full flex flex-col sm:flex-col md:flex-row lg:flex-row">
        <StepBar />
        <Routes>
          {utilizerRoutes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <MainContent>
                  <Component />
                </MainContent>
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default BuildResumeLayout;
