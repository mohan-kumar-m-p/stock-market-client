import { createBrowserRouter, RouterProvider , Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import CompanyList from "./pages/product/CompanyList";
import ViewCompany from "./pages/product/ViewCompany";
import Home from "./pages/product/Home";
import LoginPage from "./pages/authpages/LoginPage";
import { useAuth } from "./hooks/AuthContext";

function Routers() {
  const { authenticated } = useAuth();

  const router = createBrowserRouter([
    {
      path: '/',
      element: authenticated ? <Layout /> : <Navigate to="/auth/login" />,
      children: [
        {
          path: "/home",
          element: <Home/>,
        },
        {
          path: "/stockmarket/company/list",
          element: <CompanyList/>,
        },
        {
          path: "/stockmarket/company/view/:id",
          element: <ViewCompany />,
        },
      ]
    },
    {
      path: "/auth/login",
      element: <LoginPage />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Routers;
