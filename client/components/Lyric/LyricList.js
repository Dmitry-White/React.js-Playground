import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSongs from '../../queries/fetchSongs';
import deleteSong from '../../mutations/deleteSong';

class LyricList extends Component {
    onLyricLike(id) {
        console.log("Liked!");
    };

    renderLyrics() {
        return this.props.lyrics.map(({id, content}) => {
            return (
                <li key={id} className="collection-item">
                    {content}
                    <i
                        className="material-icons"
                        style={{cursor: "pointer"}}
                        onClick={() => this.onLyricLike(id)}
                    >thumb_up</i>
                </li>
            );
        });
    };

    render() {
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
