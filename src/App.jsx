import "./App.css";
import Home1 from "./Home1";
import Time2 from "./Time2";
import Data3 from "./Data3";
import Currency4 from "./Currency4";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "./STORE/store";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/time" className="link">
              Time
            </Link>
          </li>
          <li>
            <Link to="/data" className="link">
              Data
            </Link>
          </li>
          <li>
            <Link to="/currency" className="link">
              Currency
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home1 store={store} />
          </Route>
          <Route path="/time">
            <Time2 store={store} />
          </Route>
          <Route path="/data">
            <Data3 />
          </Route>
          <Route path="/currency">
            <Currency4 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
