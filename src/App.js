import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import NavBar from "./layouts/navbar/NavBar";
import Home from "./pages/home/Home";
<<<<<<< HEAD
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductCard from "./components/ProductCard/ProductCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import database from "./data/database.json";
import { setProducts } from "./redux/slices/productsSlices";
=======
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
>>>>>>> a74586996247f2aac7406dacaef59be60d88e468

const AppLayout = () => {
    return (
        <div>
            {/* //Ajouter un layout ici (navbar etc.) */}
            <NavBar />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AppLayout>
                <Outlet />
            </AppLayout>
        ),
        children: [
            {
                // Code d'exemple
                path: "/",
                element: <Home />,
            },
            {
                path: "/chips",
                element: <ProductsContainer productsCategory="chips" />,
            },
            {
                path: "/chocolates",
                element: <ProductsContainer productsCategory="chocolate" />,
            },
            {
                path: "/candies",
                element: <ProductsContainer productsCategory="candy" />,
            },
            {
                path: "/ice-cream",
                element: <ProductsContainer productsCategory="ice_cream" />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
