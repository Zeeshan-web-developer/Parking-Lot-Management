import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
const Home = lazy(() => import("pages/Home/container/Home"));
const PageNotFound = lazy(() => import("components/PageNotFound"));

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    Component: PageNotFound,
  },
];

function Router() {
  return (
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          <Component />
        </Route>
      ))}
    </Switch>
  );
}

export default Router;
