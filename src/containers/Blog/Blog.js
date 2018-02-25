import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';

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
                <Route path="/" exact component={Posts}/>
                <Route path="/full-post" component={FullPost}/>
                <Route path="/:id" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;