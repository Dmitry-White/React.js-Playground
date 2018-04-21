import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import addLyric from '../mutations/addLyric';

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {content: ''};
    };

    onSubmit() {
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a Lyric</label>
                <input
                    value={this.state.content}
                    onChange={event => {
                        thist.setState({content: event.target.value})
                    }}/>
            </form>
        );
    };
};

export default graphql(addLyric)(LyricCreate);
