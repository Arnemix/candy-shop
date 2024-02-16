import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import NavBar from "./layouts/navbar/NavBar";
import Home from "./pages/home/Home";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import ProductDetails from "./components/ProductsDetails/ProductsDetails";
import Cart from "./pages/cart/Cart";

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
            {
                path: "/product/:id",
                element: <ProductDetails />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
