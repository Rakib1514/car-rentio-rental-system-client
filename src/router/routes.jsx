import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/homePage/Home";
import CarDetails from "../pages/car-details/CarDetails";
import Register from "../pages/authentication/Register";
// import axios from "axios";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'car/:id',
        element: <CarDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  },
]);

export default routes;
