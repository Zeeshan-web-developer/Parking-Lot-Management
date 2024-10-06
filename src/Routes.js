import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
const Home = lazy(() => import("pages/Home/container/Home"));

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Router;
