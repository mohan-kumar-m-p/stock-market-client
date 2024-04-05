import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import CompanyList from "./pages/product/CompanyList";
import ViewCompany from "./pages/product/ViewCompany";
import Home from "./pages/product/Home";

function Routers() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
  ]);

  return <RouterProvider router={router} />;
}

export default Routers;
