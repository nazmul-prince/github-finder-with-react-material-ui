import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs, Tab } from '@material-ui/core';


const Footer = ({ muscles, category, onSelect }) => {
  const index = category
              ? muscles.findIndex(group => group === category) + 1
              : 0

    const onTabSelect = (e, index) => {
      onSelect(index === 0 ? '' : muscles[index - 1]);
    }
    return (
        <Paper >
          <Tabs
            value={index}
            onChange={onTabSelect}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="All" />
            {muscles.map(group =>
              <Tab label={group} />  
            )}
          </Tabs>
        </Paper>
    )
}

Footer.propTypes = {

}

export default Footer;
