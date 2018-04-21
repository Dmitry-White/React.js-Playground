import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import likeLyric from '../../mutations/likeLyric';

class LyricList extends Component {
    onLyricLike(id, likes) {
        this.props.mutate({
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutations',
                likeLyric: {
                    id: id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            }
        });
    };

    renderLyrics() {
        return this.props.lyrics.map(({id, likes, content}) => {
            return (
                <li key={id} className="collection-item">
                    {content}
                    <div className="vote-box">
                        <i
                            className="material-icons"
                            onClick={() => this.onLyricLike(id, likes)}
                        >thumb_up</i>
                        {likes}
                    </div>
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

export default graphql(likeLyric)(LyricList);
