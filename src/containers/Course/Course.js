import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: ''
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search)
        for (let param of query.entries()) {
            this.setState({title: param[1]})
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;