import React, { Fragment, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';  
import UserContext from '../context/user/userContext'  
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
    //   transform: `translate(-${top}%, -${left}%)`,
    };
  }
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const User = ({ userName }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const userContext = useContext(UserContext);
  const{ getUser, user} = userContext;

  useEffect(() => {
      getUser(userName);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;
  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <button type="button" onClick={handleOpen} style={{textAlign: 'center'}}>
        More
        </button>
      <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
      <div style={modalStyle} className={classes.paper}>
        {/* <Fade in={open}> */}
            Hireable:{' '}
            {hireable ? (
                <i className='fas fa-check text-success' />
            ) : (
                <i className='fas fa-times-circle text-danger' />
            )}
            <div className='card grid-2'>
                <div className='all-center'>
                <img
                    src={avatar_url}
                    className='round-img'
                    alt=''
                    style={{ width: '150px' }}
                />
                <h1>{name}</h1>
                <p>Location: {location}</p>
                </div>
                <div>
                {bio && (
                    <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                    </Fragment>
                )}
                <a href={html_url} className='btn btn-dark my-1'>
                    Visit Github Profile
                </a>
                <ul>
                    <li>
                    {login && (
                        <Fragment>
                        <strong>Username: </strong> {login}
                        </Fragment>
                    )}
                    </li>

                    <li>
                    {company && (
                        <Fragment>
                        <strong>Company: </strong> {company}
                        </Fragment>
                    )}
                    </li>

                    <li>
                    {blog && (
                        <Fragment>
                        <strong>Website: </strong> {blog}
                        </Fragment>
                    )}
                    </li>
                </ul>
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-primary'>Followers: {followers}</div>
                <div className='badge badge-success'>Following: {following}</div>
                <div className='badge badge-light'>Public Repos: {public_repos}</div>
                <div className='badge badge-dark'>Public Gists: {public_gists}</div>
            </div>
        {/* </Fade> */}
        </div>
      </Modal>
    </div>
  );
}
export default  User;