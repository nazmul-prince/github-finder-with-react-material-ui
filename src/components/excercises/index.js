import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core'

const style = {
    Paper: { padding:20, marginTop:10, marginBottom:10}
}

const index = props => {
    return (
        <Grid container>
            <Grid item  sm>
                <Paper style={style.Paper}>
                    Left Pane
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={style.Paper}>
                    Right Pane
                </Paper>
            </Grid>
        </Grid>
    )
}

index.propTypes = {

}

export default index
