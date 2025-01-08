import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import AdminLayout from "./layouts/admin_layout/AdminLayout";
import Home from "./pages/Home";
import HomeLayout from "./layouts/home_layout/HomeLayout";
import EForm from "./components/admission/enrollment_form/EForm";
import Profile from "./components/profile/Profile";
import EnrolledStudents from "./components/admission/enrolled_students/EnrolledStudents";
import StudentsInfo from "./components/admission/enrolled_students/StudentsInfo";
import Users from "./components/new_components/Users";
import Employees from "./components/new_components/Employees";
import Dashboard from "./components/new_components/Dashboard";
import Grades from "./components/registrar/Grades";
import StudentGrade from "./components/registrar/StudentGrade";
import Faculty from "./components/faculty/Faculty";
import Clinic from "./components/clinic/Clinic";
import SSC from "./components/ssc/SSC";
import AccountingDashboard from "./components/accounting/AccountingDashboard";
import StudentFees from "./components/accounting/StudentFees";
import Department from "./components/new_components/Department";

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
      {
        path: "department",
        element: <Department />,
      },
    ],
  },
  {
    path: "/accounting",
    element: <AdminLayout />,
    children: [
      {
        path: "accounting-dashboard",
        element: <AccountingDashboard />,
      },
      {
        path: "fee",
        element: <StudentFees />,
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
    path: "/registrar",
    element: <AdminLayout />,
    children: [
      {
        path: "grades",
        element: <Grades />,
      },
      {
        path: "grades/:usn",
        element: <StudentGrade />,
      },
    ],
  },
  {
    path: "/faculty",
    element: <AdminLayout />,
    children: [
      {
        path: "faculty",
        element: <Faculty />,
      },
    ],
  },
  {
    path: "/clinic",
    element: <AdminLayout />,
    children: [
      {
        path: "clinic",
        element: <Clinic />,
      },
    ],
  },
  {
    path: "/ssc",
    element: <AdminLayout />,
    children: [
      {
        path: "ssc",
        element: <SSC />,
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
