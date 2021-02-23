import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

function LoginPage() {

  const theme = createMuiTheme({
    palette: {
type: "dark",
    },
  });
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
    <Paper className="paper">
      <Typography>
    <div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
</Typography>
</Paper>
</ThemeProvider> 
  );
}

export default LoginPage;
