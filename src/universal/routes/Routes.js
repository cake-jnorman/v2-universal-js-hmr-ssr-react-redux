// Libraries
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Redirect, Route, Switch} from 'react-router';

// Routes
// For Development only
import * as RouteMap from '../routes/static.js';

// todo: This is used in production for code splitting via `wepback.config.server.js`
// import * as RouteMap from 'universal/routes/async.js';

// Containers
import AppContainer from 'universal/containers/App/AppContainer.js';
// import PrivateRouteContainer from 'universal/containers/PrivateRoute/PrivateRouteContainer.js';

class Routes extends Component {
  render () {
    const {
      location
    } = this.props;

    return (
      <AppContainer>
        <div>
          <Switch>
            <Redirect exact from="/" to="/wizard"/>
            <Route exact path="/wizard" component={RouteMap.WizardWrapper} />
          </Switch>
        </div>
      </AppContainer>
    );
  }
}

export default Routes;
