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
import RoomList from "./components/admin/rooms/RoomList";
import SubjectLoad from "./components/admin/subject-load/SubjectLoad";
import SubjectLoadDetails from "./components/admin/subject-load/SubjectLoadDetails";
import ScheduleForm from "./components/registrar/ScheduleForm";
import ViewSchedule from "./components/registrar/ViewSchedule";
import UserProfie from "./components/admin/profile/UserProfie";
import StudentList from "./components/registrar/grade/StudentList";
import StudentGrades from "./components/registrar/grade/StudentGrades";
import Grade from "./components/student/Grade";
import Section from "./components/registrar/section/Section";
import AddSection from "./components/registrar/section/AddSection";
import AddSeat from "./components/registrar/seat/AddSeat";
import UpdateSection from "./components/registrar/section/UpdateSection";
import SeatInfo from "./components/registrar/seat/SeatInfo";
import AddGrade from "./components/registrar/grade/AddGrade";
import UpdateGrade from "./components/registrar/grade/UpdateGrade";

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
    path: "/profile",
    element: <AdminLayout />,
    children: [
      {
        path: "/profile",
        element: <UserProfie />,
      },
    ],
  },
  {
    path: "/grade",
    element: <AdminLayout />,
    children: [
      {
        path: "/grade",
        element: <Grade />,
      },
    ],
  },
  {
    path: "/subject-load",
    element: <AdminLayout />,
    children: [
      {
        path: "/subject-load",
        element: <SubjectLoad />,
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
    path: "/:id/employee-info",
    element: <AdminLayout />,
    children: [
      {
        path: "/:id/employee-info",
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
        path: "section",
        element: <Section />,
      },
      {
        path: "add-section",
        element: <AddSection />,
      },
      {
        path: "update-section/:id",
        element: <UpdateSection />,
      },
      {
        path: "add-seat/:id",
        element: <AddSeat />,
      },
      {
        path: "seat-info/:id",
        element: <SeatInfo />,
      },
      {
        path: "add-grade/:id",
        element: <AddGrade />,
      },
      {
        path: "update-grade/:id",
        element: <UpdateGrade />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "schedule/form",
        element: <ScheduleForm />,
      },
      {
        path: "schedule/:id",
        element: <ViewSchedule />,
      },
      {
        path: "students/",
        element: <StudentList />,
      },
      {
        path: "students-grade/:id",
        element: <StudentGrades />,
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
