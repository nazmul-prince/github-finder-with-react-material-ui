import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
import UserItem from './UserItem';

export class Users extends Component {

    render() {
        return (
            <Fragment>
                {
                    this.props.users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))
                }
            </Fragment>
        )
    }
}

export default Users;
