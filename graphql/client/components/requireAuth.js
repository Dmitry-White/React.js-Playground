import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import CurrentUser from '../queries/CurrentUser';

export default (WrappedComponent) => {
    class requireAuth extends Component {
        componentWillUpdate(nextProps) {
            if (!nextProps.data.user && !nextProps.data.loading) {
                hashHistory.push('/login');
            };
        };
        render() {
            return <WrappedComponent {...this.props}/>
        };
    };
    return graphql(CurrentUser)(requireAuth);
};
