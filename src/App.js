import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import NavBar from "./layouts/navbar/NavBar";
import Home from "./pages/home/Home";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";

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
