import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Table,
  TableRow,
  TableCell,
  TableHead
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import Form from "./Form";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};
const GuardProfiles = ({
  exercises,
  exercise,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise.."
  },
  category,
  onSelect,
  onDelete,
  onSelectEdit,
  onEdit,
  editMode,
  muscles
}) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs spacing={2}>
        <Table className={classes.root}>
          <TableHead>
            <TableRow>
              <TableCell align="right" style={{ textTransform: "capitalize" }}>Group</TableCell>
              <TableCell align="right" >Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          {exercises.map(({ id, title, description, muscles }) =>
            <TableRow>
              <TableCell align="right" style={{ textTransform: "capitalize" }}>{muscles}</TableCell>
              <TableCell align="right" >{id}</TableCell>
              <TableCell align="right">{title}</TableCell>
              <TableCell align="right">{description}</TableCell>
            </TableRow>
          )}
        </Table>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {editMode ? (
            <Form exercise={exercise} muscles={muscles} onSubmit={onEdit} />
          ) : (
            <Fragment>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="h6" style={{ marginTop: 20 }}>
                {description}
              </Typography>
            </Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default GuardProfiles;

