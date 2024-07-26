// import React from 'react'
import Header from "../components/AdminLayout/Header";
import MainContent from "../components/AdminLayout/MainContent";
import Sidebar from "../components/AdminLayout/Sidebar";
import { Route, Routes } from "react-router-dom";
import { adminRoutes } from "../routes";

function AdminLayout() {
  return (
    <div className="h-screen bg-slate-100">
      <Header />
      <div style={{ height: "calc(100% - 70px)" }} className="w-screen flex">
        <Sidebar />
        <Routes>
          {adminRoutes.map(({ path, breadcrumb, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <MainContent path={path} breadcrumb={breadcrumb}>
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

export default AdminLayout;
