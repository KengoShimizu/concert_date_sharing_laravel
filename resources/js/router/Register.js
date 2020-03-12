import React from 'react';
import Form from '../components/Form';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import Header from '../components/Header';
import db_reg_svg from '../img/db_reg.svg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  img: {
    position: 'absolute',
    width: '150px',
    opacity: '0.1'
  }
});

function Register() {
  const classes = useStyles();
  return (
    <div className="Register">

      <Header title="登録"/>
      <br /><br />

      <div style={{width:'95%', margin:'0 auto'}}>

        <img alt='検索' src={db_reg_svg} className={classes.img}/>

        <Typography variant="body1">
          あなたの好きなアーティストのライブ情報を登録してみんなで共有してみよう！
        </Typography>
        <br />

        <Typography color="textSecondary" variant="body1">
          *必須
        </Typography>
        <br />

        <Form />
        <br />

        <Typography variant="body1">
          みんなが登録したライブ情報を検索してみよう！
        </Typography>

        <Link to="/search" style={{textDecoration: 'none'}}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            >
            ライブ情報を検索する
          </Button>
        </Link>
        <br />
        <br />

        <Link to="/" style={{textDecoration: 'none'}}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            >
            トップに戻る
          </Button>
        </Link>
        <br /><br /><br /><br /><br />

      </div>

    </div>
  );
}

export default Register;
