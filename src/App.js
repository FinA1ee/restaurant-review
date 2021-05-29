import React, { useState } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantContextProvider from "./context/RestaurantContext";
import Search from "./components/Search";
import RestaurantReviewPage from "./components/RestaurantReviewPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/ResigterPage";
import HomePage from "./components/HomePage";

function App() {
  const [user, setUser] = useState({});
  const [hasLogin, setHasLogin] = useState(false);
  const handleLogin = (user) => {
    setUser(user);
    setHasLogin(true);
  };
  return (
    <RestaurantContextProvider>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/home"} className="navbar-brand">
            Restaurant Reviews
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/restaurant-search"} className="nav-link">
                Restaurants
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                {hasLogin ? "Log in as: ..." : "Login"}
              </Link>
            </li>
            <li>
              <Link to={"/register"} className="nav-link">
                {hasLogin ? "" : "Register"}
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={HomePage} />
            <Route path="/restaurant-search" component={Search} />
            <Route
              path="/restaurant-review/:id"
              component={RestaurantReviewPage}
            />
            <Route
              path="/login"
              render={(props) => <LoginPage login={handleLogin} />}
            />
            <Route path="/register" render={(props) => <RegisterPage />} />
          </Switch>
        </div>
      </div>
    </RestaurantContextProvider>
  );
}

export default App;
