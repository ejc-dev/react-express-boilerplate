import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Landing from "./components/pages/Landing";
import NotFound from "./components/pages/NotFound";
import Register from "./components/auths/Register";
import Login from "./components/auths/Login";
import Alert from "./components/layout/Alert";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/Landing" component={Landing} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/Login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
