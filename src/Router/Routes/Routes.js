import AddProducts from "../../Pages/AddProducts/AddProducts";
import AllCars from "../../Pages/AllCars/AllCars";
import Blog from "../../Pages/Blog/Blog";
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
                loader: () => fetch('carsdata.json'),
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
                path: '/category',
                element: <ProductCategory></ProductCategory>
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            },
            
        ]
    }
])

export default router;