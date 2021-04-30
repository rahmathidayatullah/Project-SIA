import { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const Quis = lazy(() => import("pages/Quis"));
const Login = lazy(() => import("pages/Login"));
const NotAuthorized = lazy(() => import("pages/NotAuthorized"));
const NotFound = lazy(() => import("pages/NotFound"));

const routes = [
  {
    exact: true,
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    auth: true,
  },
  {
    path: "/quis",
    component: Quis,
    auth: true,
  },
  {
    exact: true,
    path: "/",
    component: Login,
  },
  {
    path: "/not-authorized",
    component: NotAuthorized,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
