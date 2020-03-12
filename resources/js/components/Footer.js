import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root:{
    position: 'relative',
  },
  appbar: {
    position: 'fixed',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: '#f5fffa'
  },
  footerText: {
    opacity: '0.3'
  }
});

function Footer() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense">
          <Typography variant="body1" className={classes.footerText}>
            © 2020 s-kengo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
