import './App.css';
// React router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Pages
import HomePage from './pages/home-page/home.page';
import SignInPage from './pages/sign-in-page/sign-in.page';
import LogInPage from './pages/log-in-page/log-in.page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock App</h1>
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
                <LogInPage />
              </Route>
              <Route exact path="/signin">
                <SignInPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
