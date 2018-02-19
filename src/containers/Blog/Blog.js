import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Dmitry'
                    }
                })
                this.setState({posts: updatedPosts});
            }
        );
    };

    postSelectedHandler = id => {
        this.setState({selectedPostId: id});
    };

    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
                key={post.id} 
                author={post.author}
                title={post.title}
                clicked={() => this.postSelectedHandler(post.id)}
            />
        });

        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;