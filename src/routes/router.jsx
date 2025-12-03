import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layouts/Rootlayout";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../provider/PrivateRoute";
import MyProfile from "../pages/MyProfile";
import ForgetPassword from "../pages/ForgetPassword";
import Loading from "../components/Loading";
import Services from "../pages/Services";
import Contact from "../pages/Countact";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading />,
      },
      { path: "/contact-us", Component: Contact },
      { path: "/about-us", Component: AboutUs },
      { path: "/login", Component: Login },
      { path: "/signup", Component: Signup },
      { path: "*", Component: ErrorPage },
      { path: "/forget-password", Component: ForgetPassword },
    ],
  },
]);
export default router;
