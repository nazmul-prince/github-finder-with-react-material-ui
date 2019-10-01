import React, { Fragment, Component } from "react";
import "./App.css";

import { Header, Footer } from "./components/layouts";
import Exercises from "./components/exercises";
import GuardProfiles from "./components/exercises/GuardProfiles";
import Search from "./components/user/Search";
import Users from "./components/user/Users";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import { muscles, exercises } from "./store";
import SortAndSelectableTableDemo from "./components/exercises/SortAndSelectableTableDemo";

class App extends Component {
  state = {
    exercises,
    editMode: false,
    exercise: {}
  };

  getExerciseByMuscles() {

    const initialexercises = muscles.reduce((exercises, category) => {
      return {
        ...exercises,
        [category]: []
      };
    }, {});

    console.log(initialexercises);

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, initialexercises)
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));
  }

  handleCreateExercise = (exercise) => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }));
  }

  handleExerciseDeletion = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: false,
      exercise: {}
    }));
  }

  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));
  }

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise
    }));
  }

  render() {
    const exercisesByMuscles = this.getExerciseByMuscles();
    const { category, exercise, editMode, exercises } = this.state;
    return (
      <Fragment>
        <Header 
          muscles={muscles}
          createexercise={this.handleCreateExercise}
          
        />
        {/* <Exercises 
          exercises={exercisesByMuscles}
          exercise={exercise}
          category={category}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDeletion}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
          editMode={editMode}
          muscles={muscles}
          /> */}
          {/* <GuardProfiles 
            exercises={exercises}
            exercise={exercise}
            category={category}
            onSelect={this.handleExerciseSelected}
            onDelete={this.handleExerciseDeletion}
            onSelectEdit={this.handleExerciseSelectEdit}
            onEdit={this.handleExerciseEdit}
            editMode={editMode}
            muscles={muscles}
            /> */}
            <SortAndSelectableTableDemo />
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
