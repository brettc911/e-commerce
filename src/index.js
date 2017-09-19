import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css';
import registerServiceWorker from './registerServiceWorker';

// Import Router
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Import Components
import BaseLayout from './components/BaseLayout';
import Collections from './components/Collections';
import CollType from './components/CollType';
import Sale from './components/Sale';
import Press from './components/Press';
import Home from './components/Home';
import Account from './components/Account';
import SingleWatch from './components/SingleWatch';


ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/collections/:type/:id" component={SingleWatch}/>
        <Route path="/collections/:type" component={CollType}/>
        <Route path="/collections" component={Collections}/>
        <Route path="/sale" component={Sale}/>
        <Route path="/press" component={Press}/>
        <Route path="/account" component={Account}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
