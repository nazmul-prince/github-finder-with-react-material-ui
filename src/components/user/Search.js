import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const style = {
    fullWidth: { width: '100%' }
}
export class Search extends Component {
    style = {
        fullWidth: { width: '100%', padding: 5 }
    }

    state = {
        text: ''
    };

    onSubmit = e => {
        e.preventDefault();
        if(this.state.text === '') {
            alert("Please enter something");
        }
        else {
            this.props.searchUsers(this.state.text);
        }
    };

    onChange = e => this.setState({text: e.target.value});

    render() {
        return (
            <Fragment>
                <form onSubmit={this.onSubmit} className='form'>
                    <TextField
                        id="outlined-search"
                        label="Search field"
                        type="search"
                        margin="normal"
                        variant="outlined"
                        style={this.style.fullWidth}
                        onChange={this.onChange}
                    />

                    <Button 
                        variant="contained"
                        label="Search"
                        type="submit" 
                        style={this.style.fullWidth}
                    >
                        Search
                    </Button>
                </form>
            </Fragment>
        )
    }
}

export default Search;
