import Dashboard from "../../Layout/Dashboard";
import AllCars from "../../Pages/AllCars/AllCars";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/Admin/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/AllSellers";
import AllUsers from "../../Pages/Dashboard/Admin/AllUsers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Login from "../../Pages/Login/Login";
import ProductCategory from "../../Pages/ProductCategory/ProductCategory";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");


const router = createBrowserRouter(
    [
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
                element: <PrivateRouter><ProductCategory></ProductCategory></PrivateRouter>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            }
    
        ]
    }
])

export default router;