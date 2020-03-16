import React from 'react';
import ReactDOM from 'react-dom';
import Main from './router/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { theme_ } from './common_theme';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme_}>
      <Main />
      <Footer />
    </ThemeProvider>
  </BrowserRouter>
, document.getElementById('root'));
