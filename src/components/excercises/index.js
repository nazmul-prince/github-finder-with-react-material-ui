import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
       padding: 20, 
       marginTop: 10, 
       marginBottom: 10, 
       height: 500,
       overflowY: 'auto' }
};

const index = ({ excercises,
     excercise: {
            id,
            title='Welcome!',
            description='Please select an excercise..'
        }, 
     category, 
     onSelect 
    }) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
            {excercises.map(([group, excercises]) =>
            !category || category === group
            ? <Fragment>
              <Typography
                variant="h5"
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>
              <List component="ul">
                  {excercises.map(({ id, title }) => 
                    <ListItem button>
                        <ListItemText 
                            primary={title} 
                            onClick={() => onSelect(id)}
                        />
                    </ListItem>
                  )}
              </List>
            </Fragment>
            : null
          )}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
            <Typography
                variant="h5"
            >
                {title}
            </Typography>
            <Typography
                variant="h6"
                style={{ marginTop: 20 }}
            >
                {description}
            </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

index.propTypes = {};

export default index;
