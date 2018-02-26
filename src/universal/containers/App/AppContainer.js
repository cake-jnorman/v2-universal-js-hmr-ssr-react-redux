import React, {Component, } from 'react';
import {PropTypes} from 'prop-types';
import AppRoot from 'universal/components/app/AppRoot/AppRoot';

class AppContainer extends Component {
  render () {
    return (
      <AppRoot {...this.props}/>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default AppContainer;
