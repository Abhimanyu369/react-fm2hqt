import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './List';
import Userdetail from './Userdetail';
import './style.css';

export default function App() {
  const payload = [
    {
      id: '1',
      name: 'Luke SkyWalker',
      height: 'test',
      mass: '21',
      homeWorld: 'ghjds'
    },
    {
      id: '2',
      name: 'C-3PO',
      height: 'test',
      mass: '21',
      homeWorld: 'ghjds'
    },
    {
      id: '3',
      name: 'RD2D',
      height: 'test',
      mass: '21',
      homeWorld: 'ghjds'
    }
  ];
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <List payload={payload} />
        </Route>
        <Route path="/detail/:id">
          <Userdetail payload={payload} />
        </Route>
      </Switch>
    </Router>
  );
}
