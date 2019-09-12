import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
import UserItem from './UserItem';
import UserContext from '../context/user/userContext';

export class Users extends Component {
    static contextType = UserContext;

    componentDidMount() {
        console.log("did: " + this.context);
    }
    
    render() {
        return (
            <Fragment>
                {
                    this.context.users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))
                }
            </Fragment>
        );
    }
}

export default Users;
