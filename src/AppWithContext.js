import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header, Footer } from './components/layouts';
// import Excercises from './components/excercises';
import Search from './components/user/SearchWithContext';
import Users from './components/user/UsersWithContext';
import axios from 'axios';    
import { Grid, Paper } from '@material-ui/core';
import UserState from './components/context/user/UserState'

class AppWithContext extends Component {
  
  render() {
      return (
          <UserState>
          <Fragment>
            <Header />
            {/* <Paper style={{height: '100%', overflow: 'auto'}}> */}
            <Grid container>
                <Grid item  sm>
                  <Grid container >
                    <Grid item xs={12}>
                      <Search />
                    </Grid>
                    <Users />
                  </Grid>
                </Grid>
                {/* <Grid item sm>
                    <Paper >
                        Right Pane
                    </Paper>
                </Grid> */}
            </Grid>
            {/* </Paper> */}
          </Fragment>
          </UserState>
      )
  }
}

export default AppWithContext;
