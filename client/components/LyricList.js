import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSongs from '../queries/fetchSongs';
import deleteSong from '../mutations/deleteSong';

class LyricList extends Component {
    onLyricLike() {
        console.log("Liked!");
    };

    renderLyrics() {
        return (
            <li className="collection-item">
                Lyrics
                <i
                    className="material-icons"
                    style={{cursor: "pointer"}}
                    onClick={() => this.onLyricDelete()}
                >thumb_up</i>
            </li>
        )
        /*return this.props.data.songs.map(({id, title}) => {
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i
                        className="material-icons"
                        style={{cursor: "pointer"}}
                        onClick={() => this.onLyricDelete()}
                    >thumb_up</i>
                </li>
            );
        });*/
    };

    render() {
        /*if (this.props.data.loading) {
            return <div className="loader">Loading...</div>;
        };*/
        return (
            <div>
                <ul className="collection">
                    {this.renderLyrics()}
                </ul>
            </div>
        );
    };
};

export default LyricList;
