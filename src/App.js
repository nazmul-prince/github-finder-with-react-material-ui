import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header, Footer } from './components/layouts';
// import Excercises from './components/excercises';
import Search from './components/user/Search';
import Users from './components/user/Users';
import axios from 'axios';    
import { Grid, Paper } from '@material-ui/core';

// function App() {
//   return (
//     <Fragment >
//       <Header />
//       <Excercises />
//       <Footer />
//     </Fragment>
//   );
// }

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Nazmul"
      },
      {
        id: 2,
        name: "Nazmul"
      },
      {
        id: 3,
        name: "Nazmul"
      },
      {
        id: 4,
        name: "Nazmul"
      },
      {
        id: 5,
        name: "Nazmul"
      },
      {
        id: 6,
        name: "Nazmul"
      },
      {
        id: 7,
        name: 'Nazmul'
      },
    ]
  };

  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}`
       + `&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );

    this.setState({users: res.data.items});
  };
  
  render() {
      return (
          <Fragment>
            <Header />

            <Grid container>
                <Grid item  sm>
                  <Grid container>
                    <Grid item xs={12}>
                      <Search />
                    </Grid>
                    <Users users={this.state.users}/>
                  </Grid>
                </Grid>
                <Grid item sm>
                    <Paper >
                        Right Pane
                    </Paper>
                </Grid>
            </Grid>
          </Fragment>
      )
  }
}

export default App;
