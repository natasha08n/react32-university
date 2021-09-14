import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "./components/pages/Home/Home";
import { Faculties } from "./components/pages/Faculties/Faculties";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { routes } from "./utils/routes";

const Faculty = lazy(() => import("./components/pages/Faculty"));

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "flex-start",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Sidebar />
      <Suspense fallback={<div>Идет загрузка...</div>}>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.faculties} exact component={Faculties} />
          <Route path={routes["faculties.id"]} component={Faculty} />
          <Route component={NotFound} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
