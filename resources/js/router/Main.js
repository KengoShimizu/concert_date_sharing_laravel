import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import AfterRegister from './AfterRegister';
import Search from './Search';
import Top from './Top';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Top} />
      <Route path="/search" component={Search} />
      <Route path="/register" component={Register} />
      <Route path="/registered" component={AfterRegister} />
    </Switch>
  </main>
);

export default Main;
