import React from 'react';
import './App.css';
import { AccountEditor } from './AccountEditor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => <>
    <Router>
      <Switch>
        <Route path="/edit/:accountId" component={ AccountEditor }/>
      </Switch>
    </Router>
  </>;
