import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import AdminLayout from "./layouts/admin_layout/AdminLayout";
import Home from "./pages/Home";
import HomeLayout from "./layouts/home_layout/HomeLayout";
import EForm from "./components/admission/enrollment_form/EForm";
import Profile from "./components/admin/profile/Profile";
import EnrolledStudents from "./components/admission/enrolled_students/EnrolledStudents";
import StudentsInfo from "./components/admission/enrolled_students/StudentsInfo";
import SSC from "./components/ssc/SSC";
import Clinic from "./components/clinic/Clinic";
import Faculty from "./components/faculty/Faculty";
import Schedule from "./components/registrar/Schedule";
import AccountingDashboard from "./components/accounting/AccountingDashboard";
import StudentFees from "./components/accounting/StudentFees";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/users/Users";
import Employees from "./components/admin/employees/Employees";
import DepartmentDashboard from "./components/admin/departments/DepartmentDashboard";
import PositionDashboard from "./components/admin/positions/PositionDashboard";
import ProgramDashboard from "./components/admin/programs/ProgramDashboard";
import CourseDashboard from "./components/admin/courses/CourseDashboard";
import EmploymentForm from "./components/admin/employees/EmployeeForm";
import UpdateEmployee from "./components/admin/employees/UpdateEmployee";
import Test from "./components/admin/employees/Test";
import RoomList from "./components/admin/rooms/RoomList";
import SubjectLoad from "./components/admin/subject-load/SubjectLoad";
import SubjectLoadDetails from "./components/admin/subject-load/SubjectLoadDetails";
import CreateSchedule from "./components/registrar/CreateSchedule";

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
        path: "/test",
        element: <Test />,
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
    path: "/profile",
    element: <AdminLayout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "update-employee/:id",
        element: <UpdateEmployee />,
      },
    ],
  },
  {
    path: "/:id/profile",
    element: <AdminLayout />,
    children: [
      {
        path: "/:id/profile",
        element: <Profile />,
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
        path: "departmentdashboard",
        element: <DepartmentDashboard />,
      },
      {
        path: "positiondashboard",
        element: <PositionDashboard />,
      },
      {
        path: "programdashboard",
        element: <ProgramDashboard />,
      },
      {
        path: "coursedashboard",
        element: <CourseDashboard />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "add-employee",
        element: <EmploymentForm />,
      },
      {
        path: "room-list",
        element: <RoomList />,
      },
      {
        path: "subject-load",
        element: <SubjectLoad />,
      },
      {
        path: "subject-load-details",
        element: <SubjectLoadDetails />,
      },
    ],
  },
  {
    path: "/admission",
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
        path: "student-fees",
        element: <StudentFees />,
      },
    ],
  },
  {
    path: "/registrar",
    element: <AdminLayout />,
    children: [
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "schedule/create",
        element: <CreateSchedule />,
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

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
