import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Thankyou from "./pages/Thankyou";
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
        <Route exact path="/thankyou">
          <Thankyou />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
