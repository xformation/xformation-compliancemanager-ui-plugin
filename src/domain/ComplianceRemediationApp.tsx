import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ComplianceRemediation } from './ComplianceRemediation';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/complianceremediation`} component={ComplianceRemediation} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('compliance-main-container')
    );
  }, 100);
}