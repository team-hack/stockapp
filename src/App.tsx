import "./App.css";
// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import { Page } from "./components/Page";
// Navbar
import { Header }  from "./components/header/header.component"

const App: React.FC = () => {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/login">
                <Page title="Login" content="This is the login page" />
              </Route>
              <Route exact path="/signup">
                <Page title="Signup" content="This is the signup page" />
              </Route>
              <Route path="/">
                <Page title={"Home Page"} content="This is the home page" />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
};

export default App;
