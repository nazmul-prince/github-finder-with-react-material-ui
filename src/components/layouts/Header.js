import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CreateDialog from '../exercises/dialogs/Create';

const Header = ({ muscles, createExercise }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
                    Context api example using Material-ui
                </Typography>

                <CreateDialog 
                    muscles={muscles}
                    onCreate={createExercise}
                />
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {

}

export default Header;
