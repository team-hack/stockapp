import "./App.css";
// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import { Page } from "./components/Page";
// Navbar
import { Header } from "./components/Header";

// Signup
import Signup from "./components/Signup";

// Login
import { Login } from "./components/Login";

// Authorization Provider
import { AuthProvider } from "./context/AuthProvider";

import PrivateRoute from "./components/PrivateRoute";

// Home page
import HomePage from "./home";

const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/protected">
                  <PrivateRoute>
                    <Page
                      title="protected"
                      content="should not be here if not logged in"
                    />
                  </PrivateRoute>
                </Route>
                <Route exact path="/login">
                  <Page title="Login" content="This is the login page" />
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route path="/" component={HomePage} />
              </Switch>
            </div>
          </Router>
        </header>
      </div>
    </AuthProvider>
  );
};

export default App;
