import React from 'react';
import SearchForm from '../components/SearchForm';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import Header from '../components/Header';
import search_svg from '../img/search.svg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  img: {
    position: 'absolute',
    width: '150px',
    opacity: '0.1'
  }
});

function Search() {
  const classes = useStyles();
  return (
    <div className="Search">

    <Header title="検索"/>
    <br /><br />

      <div style={{width:'95%', margin:'0 auto'}}>

        <img alt='検索' src={search_svg} className={classes.img}/>

        <Typography variant="body1">
          あなたの好きなアーティストのライブ情報を検索してみましょう！<br />
        </Typography>
        <br />

        <Typography color="textSecondary" variant="body1">
          *必須
        </Typography>
        <br />

        <SearchForm />
        <br />

        <Typography variant="body1">
          検索がヒットしなかったら登録してみてね！
        </Typography>

        <Link to="/register" style={{textDecoration: 'none'}}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            >
            ライブ情報を登録する
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

export default Search;
