import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs, Tab } from '@material-ui/core';


const Footer = props => {
    return (
        <Paper >
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Paper>
    )
}

Footer.propTypes = {

}

export default Footer;
