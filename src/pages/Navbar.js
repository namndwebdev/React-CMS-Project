import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from './Profile'
import ListPosts from '../components/ListPosts'
import ViewPost from '../components/ViewPost'

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="container">
              <Link to="/" className="brand-logo">
                CMS
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
              </ul>
            </div>
          </nav>

          <hr />

          <Switch>
            <Route exact path="/" component={ ListPosts }></Route>   
            <Route path={`/post/:id`} component={ ViewPost }></Route>
            <Route path="/profile" component={ Profile }></Route>
            <Route path="/login" component={ Login }></Route>
            <Route path="/signup" component={ SignUp }></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
