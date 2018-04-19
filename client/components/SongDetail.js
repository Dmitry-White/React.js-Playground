import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
    render() {
        if (this.props.data.loading) {
            return <div>Loading...</div>;
        };
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{this.props.data.song.title}</h3>
            </div>
        );
    };
};

export default graphql(fetchSong, {
    options: (props) => ({variables: {id: props.params.id}})
})(SongDetail);
