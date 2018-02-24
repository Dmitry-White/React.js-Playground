import React, { Component } from 'react';
import axios from '../../axios';

import classes from './Posts.module.css';
import Post from '../../components/Post/Post';
import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Dmitry'
                    }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    };

    postSelectedHandler = id => {
        console.log("!");
    };

    render() {
        let page = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        
        if (!this.state.error) {
            page = this.state.posts.map(post => {
                return <Link to={"/" + post.id}>
                    <Post 
                        key={post.id} 
                        author={post.author}
                        title={post.title}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                </Link>
            });
        };

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        )
    };
};

export default Posts;