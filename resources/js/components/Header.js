import React from 'react';
import { AppBar, Toolbar, Typography, withStyles, Grid } from '@material-ui/core';
import logo from '../img/logo.png';

const styles = {
  root:{
    display: 'flex',
    flexDirection: 'column',
  },
  appbar: {
    alignItems: 'center',
  },
  headerText: {
    opacity: '0.7'
  },
  img: {
    width: '100px'
  },
  textField: {
    width: '100%'
  }
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar} color="primary">
          <Toolbar variant="dense" className={classes.textField}>
            <Grid container justify="center">
              <Grid item xs={4}>
                <img alt='ロゴ' src={logo} className={classes.img}/>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h5" className={classes.headerText} align="center">
                  {this.props.title}
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

export default withStyles(styles)(Header);
