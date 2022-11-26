import AllCars from "../../Pages/AllCars/AllCars";
import Blog from "../../Pages/Blog/Blog";

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
            }

        ]
    }
])

export default router;