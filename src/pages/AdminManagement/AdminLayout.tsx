import Header from "../../components/AdminLayout/Header";
import MainContent from "../../components/AdminLayout/MainContent";
import Sidebar from "../../components/AdminLayout/Sidebar";
import { Route, Routes } from "react-router-dom";
import { adminRoutes } from "../../routes/routes";
import { useAppSelector } from "../../store/hooks";
function AdminLayout() {
  const layout = useAppSelector((state) => state.adminLayoutSlice.layout);
  return (
    <div className="h-screen bg-slate-100">
      {layout?.showHeader && <Header />}
      <div
        style={{ height: layout?.showHeader ? "calc(100% - 70px)" : "100%" }}
        className="w-screen flex"
      >
        {layout?.showLeftSidebar && <Sidebar />}
        <Routes>
          {adminRoutes.map(
            ({ path, breadcrumb, showBreadcrumb, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <MainContent
                    path={path}
                    breadcrumb={breadcrumb}
                    showBreadcrumb={showBreadcrumb}
                  >
                    <Component />
                  </MainContent>
                }
              />
            )
          )}
        </Routes>
      </div>
    </div>
  );
}

export default AdminLayout;
