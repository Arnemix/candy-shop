import "./App.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
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
                // path: '/',
                // element: <div>Home</div>,
                path: "/home",
                element: <Home />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
