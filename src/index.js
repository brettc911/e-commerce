import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.css';
import registerServiceWorker from './registerServiceWorker';

// Import Router
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Import Components
import BaseLayout from './components/BaseLayout';
import Men from './components/Men';
import Women from './components/Women';
import Collections from './components/Collections';
import Sale from './components/Sale';
import Press from './components/Press';
import Home from './components/Home';
import Account from './components/Account';


ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/men" component={Men}/>
        <Route path="/women" component={Women}/>
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
