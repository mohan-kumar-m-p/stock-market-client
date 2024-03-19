import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import CompaniesList from "../pages/stockmarket/CompaniesList";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "companies/list",
                element: <CompaniesList />,
            },
        ],
    },
]);

function Routers() {
    return <>
        <RouterProvider router={router} />
    </>;
}

export default Routers;