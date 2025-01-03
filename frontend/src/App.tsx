import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import EForm from "./components/admission/EForm";
import AboutLayout from "./layouts/about_layout/AboutLayout";
import Mission from "./components/about/Mission";
import PrevHome from "./components/home/PrevHome";
import CoursesOffered from "./components/about/CoursesOffered";
import Vision from "./components/about/Vision";
import AMAHymn from "./components/about/AMAHymn";
import OfficeChairmanVice from "./components/about/OfficeChairmanVice";
import Footer from "./components/Footer";
import Layout from "./layouts/home_layout/Layout";
import AdminLayout from "./layouts/AdminLayout";
import AccountingLayout from "./layouts/accounting_layout/AccountingLayout";
import AccountingDashboard from "./components/accounting/AccountingDashboard";
import StudentFees from "./components/accounting/StudentFees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PrevHome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "admission/students",
        element: <EForm />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutLayout />,
    children: [
      {
        path: "mission",
        element: <Mission />,
      },
      {
        path: "vision",
        element: <Vision />,
      },
      {
        path: "ama-hymn",
        element: <AMAHymn />,
      },
      {
        path: "office-chairman-vice",
        element: <OfficeChairmanVice />,
      },
      {
        path: "course-offered",
        element: <CoursesOffered />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
    ],
  },
  {
    path: "/admin/accounting",
    element: <AccountingLayout />,
    children: [
      {
        path: "dashboard",
        element: <AccountingDashboard />,
      },
      {
        path: "student-fees",
        element: <StudentFees />,
      },
      // Add more routes as needed
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
