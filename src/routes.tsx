import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminProduct from "./pages/admin/product";
import AdminProductAdd from "./pages/admin/product/add";
import AdminProductEdit from "./pages/admin/product/edit";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

export const routers = createBrowserRouter([
    {
        path: "/", element: <LayoutWebsite />,
        children: [
            { path: "", element: <Home /> },
            { path: ":iddetail/detail", element: <ProductDetail /> }
        ]
    },
    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            {
                path: "dashboard",
                element: <h2 className="font-bold text-2xl">User</h2>,
            },
            {
                path: "product",
                element: <AdminProduct />
            },
            {
                path: "product/add",
                element: <AdminProductAdd />
            },
            {
                path: "product/:idProduct/edit",
                element: <AdminProductEdit />
            }


        ]
    }
])