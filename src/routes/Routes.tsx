import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);
