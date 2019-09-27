import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    FormControl: {
        width: 300
    }
});

export class Form extends Component {

    state = this.getInitialState();

    getInitialState() {
        const { exercise } = this.props

        return exercise ? exercise : {
            title: "",
            description: "",
            muscles: ""
        }
    }

    componentWillReceiveProps({ exercise }) {
        this.setState({
            ...exercise
        });
    }

    handleChange = name => ({ target: { value } }) => {
      this.setState({
          [name]: value
      });
    };
    
    handleSubmit = () => {
        const { exercise } = this.state; 
        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...this.state
        });
    
        this.setState(this.getInitialState());
    }

    render() {
        const {classes, muscles: categories } = this.props;
        const { title, description, muscles } = this.state;
        console.log("muscles");
        console.log(muscles);
        return (
            <form>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
                className={classes.FormControl}
              />
              <br />
              <FormControl 
                className={classes.FormControl}>
                <InputLabel htmlFor="muscles">
                    Muscles
                </InputLabel>
                <Select
                  value={muscles}
                  onChange={this.handleChange("muscles")}
                >
                    {categories.map(category => 
                        <MenuItem value={category} style={{ textTransform: "capitalize" }}>{category}</MenuItem>
                    )}
                </Select>
              </FormControl>
              <br />
              <TextField
                multiline
                rows="4"
                label="Description"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
                className={classes.FormControl}
              />
              <br />

                <Button 
                color="primary" 
                variant="contained"
                onClick={this.handleSubmit}
                >
                {this.props.exercise ? 'Edit' : 'Create'}
                </Button>
            </form>
        )
    }
}
export default withStyles(styles)(Form);
