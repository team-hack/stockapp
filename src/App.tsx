import "./App.css";
// React router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Pages
import { Page } from "./components/Page";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="stock-app" title="main-heading">
          Stock App
        </h1>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/login">
                <Page title="Log In" content="This is the login page" />
              </Route>
              <Route exact path="/signin">
                <Page title="Sign In" content="This is the sign-in page" />
              </Route>
              <Route path="/">
                <Page title={0} content="This is the home page" />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
};

export default App;
