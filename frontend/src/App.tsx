import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import AboutLayout from "./layouts/about_layout/AboutLayout";
import Mission from "./components/about/Mission";
import CoursesOffered from "./components/about/CoursesOffered";
import Vision from "./components/about/Vision";
import AMAHymn from "./components/about/AMAHymn";
import OfficeChairmanVice from "./components/about/OfficeChairmanVice";
import Footer from "./components/Footer";
import Layout from "./layouts/home_layout/Layout";
import AdminLayout from "./layouts/admin_layout/AdminLayout";
import Dashboard from "./components/dashboard/Dashboard";
import StudentUpdateProfile from "./components/update_profile/StudentUpdateProfile";
import Home from "./pages/Home";
import AdmissionLayout from "./layouts/admission_layout/AdmissionLayout";
import EForm from "./components/admission/enrollment_form/EForm";
import AdmissionProfile from "./components/admission/profile/AdmissionProfile";
import AdmissionUpdateProfile from "./components/admission/profile/AdmissionUpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "users/allusers",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/admission",
    element: <AdmissionLayout />,
    children: [
      {
        path: "user/profile",
        element: <AdmissionProfile />,
      },
      {
        path: "user/updateprofile",
        element: <AdmissionUpdateProfile />,
      },
      {
        path: "main/eform",
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
      {
        path: "update",
        element: <StudentUpdateProfile />,
      },
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
