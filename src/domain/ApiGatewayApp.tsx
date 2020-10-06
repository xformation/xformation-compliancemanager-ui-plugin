import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApiGateway } from './ApiGateway';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/apigateway`} component={ApiGateway} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('compliance-main-container')
    );
  }, 100);
}