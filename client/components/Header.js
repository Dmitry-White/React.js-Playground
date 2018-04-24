import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import CurrentUser from '../queries/CurrentUser';

class Header extends Component {
    render() {
        console.log(this.props.data);
        return (
            <header>
                Header
            </header>
        );
    };
};

export default graphql(CurrentUser)(Header);
