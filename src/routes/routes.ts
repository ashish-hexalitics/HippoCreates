import Dashboard from "../pages/DashboardManagement/Dashboard";
import HomePage from "../pages/HomePage";
import AskExperiencePage from "../pages/AskExperiencePage";
import IntroduceStepsPage from "../pages/IntroduceStepsPage";
import CooseResumePage from "../pages/CooseResumePage";
import Login from "../pages/AuthManagement/Login";
import AdminLayout from "../pages/AdminManagement/AdminLayout";
import Register from "../pages/AuthManagement/Register";
import Report from "../pages/Report";
import Setting from "../pages/SettingManagemnt/Setting";
import Users from "../pages/UserManagemnt/Users";
import Template from "../pages/TemplateManagement/Templates";
import ConfigureTemplate from "../pages/TemplateManagement/ConfigureTemplate";
import Categories from "../pages/CategoryManagement/Categories";
import UseTempalte from "../pages/TemplateManagement/UseTempalte";
import BuildResumeLayout from "../pages/BuildResumeManagement/BuildResumeLayout";
import ContactPage from "../pages/BuildResumeManagement/ContactPage";
import ExperiencePage from "../pages/BuildResumeManagement/ExperiencePage";
import SkillsPage from "../pages/BuildResumeManagement/SkillsPage";
import SummaryPage from "../pages/BuildResumeManagement/SummaryPage";
import AdditonalDetailsPage from "../pages/BuildResumeManagement/AdditonalDetailsPage";
import Educationpage from "../pages/BuildResumeManagement/EducationPage";

export const publicRoutes = [ // these routes are accessable without auth
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/steps",
    component: IntroduceStepsPage,
  },
  {
    path: "/ask-experience",
    component: AskExperiencePage,
  },
  {
    path: "/choose-resume",
    component: CooseResumePage,
  },
  {
    path: "/view/template/:categoryId/:templateId",
    component: UseTempalte,
  },
];

export const protectedRoutes = [ // these routes are accessable with auth or layout for diffrent roles
  {
    path: "/admin/*",
    component: AdminLayout,
  },
  {
    path: "/build-resume/*",
    component: BuildResumeLayout,
  },
];

export const authRoutes = [ // these routes are accessable without auth but not accessable with auth
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

export const adminRoutes = [ // these routes are accessable with auth or child routes of admin/*  routes
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
    path: "/create/template/:categoryId",
    component: ConfigureTemplate,
    breadcrumb: ["admin", "Create Templates"],
    showBreadcrumb: false,
  },
  {
    path: "/edit/template/:categoryId/:templateId",
    component: ConfigureTemplate,
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

export const utilizerRoutes = [ // these routes are accessable with auth or child routes of build-resume/*  routes
  {
    path: "contact",
    component: ContactPage,
  },
  {
    path: "experience",
    component: ExperiencePage,
  },
  {
    path: "education",
    component: Educationpage,
  },
  {
    path: "skills",
    component: SkillsPage,
  },
  {
    path: "summary",
    component: SummaryPage,
  },
  {
    path: "additional-details",
    component: AdditonalDetailsPage,
  },
];
