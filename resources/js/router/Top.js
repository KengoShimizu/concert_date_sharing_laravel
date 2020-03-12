import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, Grid } from '@material-ui/core';
import Header from '../components/Header';
import db_reg_svg from '../img/db_reg.svg';
import search_svg from '../img/search.svg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  title: {
    fontSize: '50px !important',
    fontWeight: 'bold !important',
    marginTop: '20px',
    marginLeft: '20px'
  },
  img: {
    position: 'absolute',
    width: '150px',
    opacity: '0.1'
  },
  paper: {
    position: 'relative',
    height: '250px',
    backgroundColor: '#e3f2fd'
  }
});

function Top() {
  const classes = useStyles();
  return (
    <div className="Top">

    <Header title="トップ"/>
    <Typography variant="h1" className={classes.title}>LiveSharing</Typography>
    <br />

      <div style={{width:'95%', margin:'0 auto'}}>

        <Link to="/search" style={{textDecoration: 'none'}}>
          <Paper className={classes.paper}>
            <div style={{width:'95%', paddingTop:'10px', margin:'0 auto'}}>
              <img alt='検索' src={search_svg} className={classes.img}/>
              <br />
              <Typography color="secondary" variant="h5">ライブ情報を検索する</Typography>
              <br />
              <br />
              <br />
              <Grid container justify="center">
                <Grid item xs={5}></Grid>
                <Grid item xs={6}>
                  <Typography　variant="body1">
                    みんなが登録したアーティストのライブ情報を検索してみよう！
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Link>
        <br />

        <Link to="/register" style={{textDecoration: 'none'}}>
          <Paper className={classes.paper}>
            <div style={{width:'95%', margin:'0 auto'}}>
              <img alt='検索' src={db_reg_svg} className={classes.img}/>
              <br />
              <Typography color="secondary" variant="h5">ライブ情報を登録する</Typography>
              <br />
              <br />
              <br />
              <Grid container justify="center">
                <Grid item xs={5}></Grid>
                <Grid item xs={6}>
                  <Typography　variant="body1">
                    自分の好きなアーティストのライブ情報を登録して，みんなで共有しよう！
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Link>
        <br />
        <br />

      </div>

    </div>
  );
}

export default Top;
