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
                // path: '/',
                // element: <div>Home</div>,
                path: "/home",
                element: <Home />,
            },
            {
                path: "/chips",
                element: <div>Chips</div>,
            },
            {
                path: "/chocolats",
                element: <div>Chocolats</div>,
            },
            {
                path: "/bonbons",
                element: <div>Bonbons</div>,
            },
            {
                path: "/glaces",
                element: <div>Glaces</div>,
            },
        ],
    },
]);

export default function App() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(setProducts(database.products));
    }, []);
    return <RouterProvider router={router} />;
}
