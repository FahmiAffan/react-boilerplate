import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import { UsersPage } from "../pages/users/UsersPage";
import { LoginForm, RegisterForm } from "../pages/AuthForm";

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
  {
    path: "/users/:id",
    element: <UsersPage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
]);
