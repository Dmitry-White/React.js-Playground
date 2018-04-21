import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSong from '../../queries/fetchSong';

import LyricList from '../Lyric/LyricList';
import LyricCreate from '../Lyric/LyricCreate';

class SongDetail extends Component {
    render() {
        if (this.props.data.loading) {
            return <div className="loader">Loading...</div>;
        };
        const song = this.props.data.song;
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <LyricList lyrics={song.lyrics}/>
                <LyricCreate songId={this.props.params.id}/>
            </div>
        );
    };
};

export default graphql(fetchSong, {
    options: (props) => ({ variables: {id: props.params.id} })
})(SongDetail);
