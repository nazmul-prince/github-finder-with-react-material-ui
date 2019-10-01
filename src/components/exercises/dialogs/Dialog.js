import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Form from "../Form";
import { exercises } from "../../../store";

export class Create extends Component {
  state = {
    open: false
  };

  handlToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleFormSubmit = exercise => {
    this.handlToggle();
    this.props.onCreate(exercise);
  }

  render() {
    const { open } = this.state;
    const { muscles, onCreate } = this.props;

    return (
      <Fragment>
        <Fab variant="fab" size="small" onClick={this.handlToggle}>
          <AddIcon />
        </Fab>
        <Dialog open={open} onClose={this.handlToggle}>
          <DialogTitle id="form-dialog-title">
            Create a new exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Content</DialogContentText>
            <Form 
              muscles={muscles}
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default Create;
