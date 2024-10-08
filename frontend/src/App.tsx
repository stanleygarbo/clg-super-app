import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import Layout from "./components/Layout";
import About from "./pages/auth/About";
import Home from "./pages/auth/Home";
import EForm from "./components/admission/EForm";
import AdmissionLayout from "./admissionLayout/AdmissionLayout";

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
    path: "/admission",
    element: <AdmissionLayout />,
    children: [
      {
        path: "/admission",
        element: <EForm />,
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
