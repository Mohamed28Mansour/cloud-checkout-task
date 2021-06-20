import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Response from "./pages/Response";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation />
        </Route>
        <Route exact path="/response">
          <Response />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
