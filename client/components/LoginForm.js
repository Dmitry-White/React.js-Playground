import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Login from '../mutations/Login';
import AuthForm from './AuthForm';
import CurrentUser from '../queries/CurrentUser';

class LoginForm extends Component {
    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{query: CurrentUser}]
        });
    };

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)}/>
            </div>
        );
    };
};

export default graphql(Login)(LoginForm);
