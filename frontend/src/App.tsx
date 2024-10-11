import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import EForm from "./components/admission/EForm";
import AdmissionLayout from "./layouts/admission_layout/AdmissionLayout";
import AboutLayout from "./layouts/about_layout/AboutLayout";
import Mission from "./components/about/Mission";
import PrevHome from "./components/home/PrevHome";
import CoursesOffered from "./components/about/CoursesOffered";
import Vision from "./components/about/Vision";
import AMAHymn from "./components/about/AMAHymn";
import OfficeChairmanVice from "./components/about/OfficeChairmanVice";
import Footer from "./components/Footer";
import Layout from "./layouts/home_layout/Layout";

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
    path: "/admission",
    element: <AdmissionLayout />,
    children: [
      {
        path: "/admission",
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
