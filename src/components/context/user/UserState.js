import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { SEARCH_USERS, GET_USER} from '../../types'

const UserState = props => {
    const initialState = {
        users: [],
        user: {}
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const searchUsers = async text => {
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}`
            + `&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
        );

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    };

    const getUser = async userName => {

        const res = await axios.get(
            `https://api.github.com/users/${userName}?client_id=${process.env.GITHUB_CLIENT_ID}`
            + `&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
        );
        dispatch({
            type: SEARCH_USERS,
            payload: res.data
        });
    }

    return <UserContext.Provider
        value={{
            users: state.users,
            user: state.user,
            searchUsers,
            getUser
        }}
    >
        {props.children}
        </UserContext.Provider>
}

export default UserState;