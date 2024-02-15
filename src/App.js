import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import NavBar from "./layouts/navbar/NavBar";
import Home from "./pages/home/Home";

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
    return <RouterProvider router={router} />;
}
