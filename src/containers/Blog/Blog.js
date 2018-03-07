import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from '../Posts/Posts';
import FullPost from '../FullPost/FullPost';
//import NewPost from '../NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
});

class Blog extends Component {
    render () {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    activeClassName={classes.active}
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/new-post" 
                                    activeClassName={classes.active}
                                >New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={AsyncNewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                    <Route render={() => <h1>404 - Not Found!</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;