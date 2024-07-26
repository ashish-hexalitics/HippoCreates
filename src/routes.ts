import AdminLayout from "./pages/AdminLayout";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Report from "./pages/Report";
import Setting from "./pages/Setting";
import Users from "./pages/Users";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/admin/*",
    component: AdminLayout,
  },
];

export const adminRoutes = [
  {
    path: "dashboard",
    component: Dashboard,
    breadcrumb: ["admin", "dashboard"],
  },
  {
    path: "users",
    component: Users,
    breadcrumb: ["admin", "users"],
  },
  {
    path: "reports",
    component: Report,
    breadcrumb: ["admin", "reports"],
  },
  {
    path: "settings",
    component: Setting,
    breadcrumb: ["admin", "settings"],
  },
];
