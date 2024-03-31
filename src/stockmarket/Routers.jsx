import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import CompanyList from "./pages/product/CompanyList";
import ViewCompany from "./pages/product/ViewCompany";

function Routers() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/stockmarket/company/list",
          element: <CompanyList/>,
        },
        {
          path: "/stockmarket/company/view",
          element: <ViewCompany />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routers;
