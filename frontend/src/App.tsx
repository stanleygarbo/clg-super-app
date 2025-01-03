import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import Mission from "./components/about/Mission";
import AdminLayout from "./layouts/admin_layout/AdminLayout";
import Home from "./pages/Home";
import HomeLayout from "./layouts/home_layout/HomeLayout";
import EForm from "./components/admission/enrollment_form/EForm";
import Profile from "./components/profile/Profile";
import EnrolledStudents from "./components/admission/enrolled_students/EnrolledStudents";
import StudentsInfo from "./components/admission/enrolled_students/StudentsInfo";
import TestLayout from "./layouts/TestLayout";
import Users from "./components/new_components/Users";
import Employees from "./components/new_components/Employees";
import Dashboard from "./components/new_components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
        path: "users",
        element: <Users />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "admission",
    element: <AdminLayout />,
    children: [
      {
        path: "eform",
        element: <EForm />,
      },
      {
        path: "enroll-student",
        element: <EnrolledStudents />,
      },
      {
        path: "studentInfo/:id",
        element: <StudentsInfo />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
    ],
  },

  {
    path: "/test",
    element: <TestLayout />,
    children: [
      {
        path: "mission",
        element: <Mission />,
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
