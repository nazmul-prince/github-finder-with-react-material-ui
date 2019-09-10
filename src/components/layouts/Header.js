import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit">
                    Excercises Databases
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {

}

export default Header;
