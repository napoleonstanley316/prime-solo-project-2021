import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
import TrainerSearch from '../TrainerSearch/TrainerSearch';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { grey } from '@material-ui/core/colors';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }


  const theme = createMuiTheme({
  palette: {
   type: "dark",
  },
});

  return (
    <ThemeProvider theme={theme}>
    <Paper>
      <Typography>
    <div className="nav">
      <Link to="/home">
        <h2>UpLevel: Personal Development</h2>
      </Link>
      <div>
        <Link className="navLink" to="/search">
          Search
        </Link>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>

        {user.id && (
          <>
            <Link className="navLink" to="/info">
              Info Page
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
    </Typography>
     </Paper>
    </ThemeProvider>
  );
}

export default Nav;
// className="nav-title"