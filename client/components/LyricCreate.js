import React, { Component } from 'react';

class LyricCreate extends Component {
    constructor() {
        super(props);
        this.state = {content: ''};
    };

    render() {
        return (
            <form>
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

export default LyricCreate;
