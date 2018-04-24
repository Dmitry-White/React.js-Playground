import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import CurrentUser from '../queries/CurrentUser';

class Header extends Component {
    renderButtons() {
        const { loading, user } = this.props.data;

        if(loading) { return <div/>; }

        if (user){
            return <div>Logout</div>
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </div>
            )
        };
    };

    render() {
        return (
            <header>
                <nav className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </nav>
            </header>
        );
    };
};

export default graphql(CurrentUser)(Header);
