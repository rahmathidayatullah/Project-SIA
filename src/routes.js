import GuardRoute from "components/GuardRoute";
import GuardOnlyRoute from "components/GuardOnlyRoute";
import { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const Quis = lazy(() => import("pages/Quis"));
const Login = lazy(() => import("pages/Login"));
const NotAuthorized = lazy(() => import("pages/NotAuthorized"));
const NotFound = lazy(() => import("pages/NotFound"));

const HomePage = () => {
  return (
    <GuardRoute>
      <Home />
    </GuardRoute>
  );
};
const QuizPage = () => {
  return (
    <GuardRoute>
      <Quis />
    </GuardRoute>
  );
};
const LoginPage = () => {
  return (
    <GuardOnlyRoute>
      <Login />
    </GuardOnlyRoute>
  );
};

const routes = [
  {
    exact: true,
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: HomePage,
    auth: true,
  },
  {
    path: "/quis",
    component: QuizPage,
    auth: true,
  },
  {
    exact: true,
    path: "/",
    component: LoginPage,
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
