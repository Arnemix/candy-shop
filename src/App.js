import "./App.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./layouts/navbar/NavBar";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import database from "./data/database.json";
import { setProducts } from "./redux/slices/productsSlices";

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
                element: <div>Chips</div>,
            },
            {
                path: "/chocolates",
                element: <div>chocolates</div>,
            },
            {
                path: "/candies",
                element: <div>Candies</div>,
            },
            {
                path: "/ice-cream",
                element: <div>Ice Cream</div>,
            },
        ],
    },
]);

export default function App() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    // useEffect(() => {
    //     dispatch(setProducts(database.products));
    // }, []);
    return <RouterProvider router={router} />;
}
