import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/homePage/Home";
import CarDetails from "../pages/car-details/CarDetails";
import Register from "../pages/authentication/Register";
import AddCar from "../pages/add-car/AddCar";
import AvailableCars from "../pages/available-cars/availableCars";
import MyCars from "../pages/my-cars/MyCars";
import PrivateRoute from "./PrivateRoute";
import SignInPage from "../pages/authentication/SignInPage";
import MyBookings from "../pages/my-bookings/MyBookings";
import Error from "../pages/Error-page/Error";
import TermsOfUse from "../pages/Terms-of-use/TermsOfUse";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-car",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "my-cars/:uid",
        element: (
          <PrivateRoute>
            <MyCars />
          </PrivateRoute>
        ),
      },
      {
        path: "my-bookings/:uid",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "available-cars",
        element: <AvailableCars />,
        loader: () => fetch("https://carrentio.vercel.app/cars?available=true"),
      },
      {
        path: "car/:id",
        element: <CarDetails />,
        loader: ({ params }) =>
          fetch(`https://carrentio.vercel.app/car/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/legal/terms-of-use",
        element: <TermsOfUse/>
      }
    ],
  },
]);

export default routes;
