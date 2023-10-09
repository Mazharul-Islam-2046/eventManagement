import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contactus from "./Pages/Contactus";
import Blogs from "./Pages/Blogs";
import AuthProvider from "./Providers/authProvider";
import PrivateRoute from "./Providers/PrivateRoute";
import Profile from "./Pages/Profile";
import ServiceInDetail from "./Pages/ServiceInDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/ourServicesData.json')
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact-us",
        element: <Contactus />,
      },
      {
        path: "/blogs",
        element: <PrivateRoute><Blogs /></PrivateRoute>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path: "/details/:id",
        element: <ServiceInDetail/>,
        loader: () => fetch('/ourServicesData.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />{" "}
    </AuthProvider>
  </React.StrictMode>
);
