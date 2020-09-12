import React from 'react';
import ReactDOM from 'react-dom';

import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

import App from './App';
import Payment from './components/breadcrumb/Payment';
import Description from './components/breadcrumb/Description';
import Address from './components/breadcrumb/Address';
import Unavailable from './components/Unavailable';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/payment" component={Payment} />
        <Route path="/address" component={Address} />
        <Route path="/description" component={Description} />
        <Route path="*" component={Unavailable} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
