import Dashboard from "../../Layout/Dashboard";
import AllCars from "../../Pages/AllCars/AllCars";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Login from "../../Pages/Login/Login";
import ProductCategory from "../../Pages/ProductCategory/ProductCategory";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/allcars',
                loader: () => fetch('http://localhost:5000/carsdata'),
                element: <AllCars></AllCars>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <ProductCategory></ProductCategory>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <MyOrders></MyOrders>
            // },
            {
                path: '/dashboard',
                element: <AddProduct></AddProduct>
            }
    
        ]
    }
])

export default router;