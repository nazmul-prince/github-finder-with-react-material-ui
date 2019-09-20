import React, { Fragment, Component } from "react";
import "./App.css";

import { Header, Footer } from "./components/layouts";
import Excercises from "./components/excercises";
import Search from "./components/user/Search";
import Users from "./components/user/Users";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import { muscles, excercises } from "./store";

class App extends Component {
  state = {
    excercises,
    excercise: {}
  };

  getExcerciseByMuscles() {
    return Object.entries(
      this.state.excercises.reduce((excercises, excercise) => {
        const { muscles } = excercise;

        excercises[muscles] = excercises[muscles]
          ? [...excercises[muscles], excercise]
          : [excercise];
        return excercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  }

  handleExcerciseSelected = id => {
    this.setState(({ excercises }) => ({
      excercise: excercises.find(ex => ex.id === id)
    }));
  }

  render() {
    const excercises = this.getExcerciseByMuscles();
    const { category, excercise } = this.state;
    return (
      <Fragment>
        <Header />
        <Excercises 
          excercises={excercises}
          excercise={excercise}
          category={category}
          onSelect={this.handleExcerciseSelected}
          />
        <Footer 
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        
        />
      </Fragment>
    );
  }
}

// class App extends Component {
//   state = {
//     users: [],
//     user: null
//   };

//   searchUsers = async text => {
//     const res = await axios.get(
//       `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}`
//        + `&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
//     );

//     this.setState({users: res.data.items});
//   };

//   render() {
//       return (
//           <Fragment>
//             <Header />
//             {/* <Paper style={{height: '100%', overflow: 'auto'}}> */}
//             <Grid container>
//                 <Grid item  sm>
//                   <Grid container >
//                     <Grid item xs={12}>
//                       <Search searchUsers={this.searchUsers}/>
//                     </Grid>
//                     <Users users={this.state.users}/>
//                   </Grid>
//                 </Grid>
//                 {/* <Grid item sm>
//                     <Paper >
//                         Right Pane
//                     </Paper>
//                 </Grid> */}
//             </Grid>
//             {/* </Paper> */}
//           </Fragment>
//       )
//   }
// }

export default App;
