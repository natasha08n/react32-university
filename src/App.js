import { Route, Switch } from "react-router-dom";

import { Home } from "./components/pages/Home/Home";
import { Faculties } from "./components/pages/Faculties/Faculties";
import { NotFound } from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faculties" component={Faculties} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
