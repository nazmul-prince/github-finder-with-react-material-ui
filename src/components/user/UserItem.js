import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
  });

const cardStyle = {margin: 5, textAlign: 'center'};
const height = {height: 50};

export class UserCardItem extends Component {
    render() {
        const { id, name } = this.props.user;
        return (
            <Grid item xs={6} sm={3}>
                <Card style={cardStyle}>

                    <CardMedia
                        image="https://images.unsplash.com/photo-1499744632587-7798360ba20f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        title="Profile pic"
                        style={height}
                    />
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {name + id}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">More</Button>
                    </CardActions>
                </Card>
                </Grid>
        )
    }
}

export default UserCardItem;
