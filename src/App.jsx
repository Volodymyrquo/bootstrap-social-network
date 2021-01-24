import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Messages,
  Musik,
  Navbar,
  News,
  NotFoundPage,
  Profile,
  Settings,
  Users,
} from './components';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Profile} />
        <Route path='/messages' component={Messages} />
        <Route path='/news' component={News} />
        <Route path='/musik' component={Musik} />
        <Route path='/users' component={Users} />
        <Route path='/settings' component={Settings} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
