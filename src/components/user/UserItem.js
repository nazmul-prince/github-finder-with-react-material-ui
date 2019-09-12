import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import User from './User';

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
    },

    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
        textAlign: 'center'
    },
  });

const cardStyle = {margin: 5, textAlign: 'center'};
const height = {height: 50, width: 120, textAlign: 'center'};
const bigAvatar= {
    margin: 10,
    width: 90,
    height: 90,
    textAlign: 'center'
};

export class UserCardItem extends Component {
    render() {
        const { id, login, avatar_url } = this.props.user;
        return (
            <Grid item xs={6} sm={3}>
                <Card style={cardStyle}>
                    <CardContent style={cardStyle}>

                        <Avatar alt="Remy Sharp" src={avatar_url} style={bigAvatar} />
                        <Typography color="textSecondary" gutterBottom>
                            {login}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        {/* <Button size="small" >More</Button> */}
                        <User userName={login} />
                    </CardActions>
                </Card>
                </Grid>
        )
    }
}

export default UserCardItem;
