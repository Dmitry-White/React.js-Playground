import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

import classes from './App.module.css';

import Courses from './containers/Courses';
import Users from './containers/Users';
import NoMatch from './NoMatch';

class App extends Component {
  render () {
    return (
        <div className={classes.App}>
          <ul>
              <li>
                <NavLink 
                  exact
                  activeClassName={classes.active}
                  to="/"
                >Home</NavLink>
              </li>
              <li>
                <NavLink 
                  activeClassName={classes.active}
                  to="/courses"
                >Courses</NavLink>
              </li>
              <li>
                <NavLink 
                  activeClassName={classes.active}
                  to="/users"
                >Users</NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" render={() => <h1>Welcome!</h1>}/>
              <Route path="/courses" component={Courses}/>
              <Route path="/users" component={Users}/>
              <Redirect from="/all-courses" to="/courses"/>
              <Route component={NoMatch}/>
            </Switch>
        </div>
    );
  }
}

export default App;
