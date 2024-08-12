import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import AdminLayout from "../pages/AdminLayout";
import Register from "../pages/Register";
import Report from "../pages/Report";
import Setting from "../pages/Setting";
import Users from "../pages/Users";
import Template from "../pages/Templates";
import CreateTemplate from "../pages/CreateTemplate";
import Categories from "../pages/Categories";

export const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
];

export const protectedRoutes = [
  {
    path: "/admin/*",
    component: AdminLayout,
  },
];

export const authRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

export const adminRoutes = [
  {
    path: "dashboard",
    component: Dashboard,
    breadcrumb: ["admin", "dashboard"],
    showBreadcrumb: true,
  },
  {
    path: "users",
    component: Users,
    breadcrumb: ["admin", "users"],
    showBreadcrumb: true,
  },
  {
    path: "reports",
    component: Report,
    breadcrumb: ["admin", "reports"],
    showBreadcrumb: true,
  },
  {
    path: "settings",
    component: Setting,
    breadcrumb: ["admin", "settings"],
    showBreadcrumb: true,
  },
  {
    path: "templates",
    component: Template,
    breadcrumb: ["admin", "templates"],
    showBreadcrumb: true,
  },
  {
    path: "/create/template",
    component: CreateTemplate,
    breadcrumb: ["admin", "Create Templates"],
    showBreadcrumb: false,
  },
  {
    path: "/template-category",
    component: Categories,
    breadcrumb: ["admin", "Template Categories"],
    showBreadcrumb: true,
  },
];
