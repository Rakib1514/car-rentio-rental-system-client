import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/homePage/Home";
import CarDetails from "../pages/car-details/CarDetails";
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
      
      }
    ]
  },
]);

export default routes;
