import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

const Home = props => (
  <div>
    <h2>Hello {props.name}! </h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Route
      exact
      path="/"
      component={props => <Home name="Elie" {...props} />}
    />
    <Route path="/about" component={About} />
  </div>
);

export default App;