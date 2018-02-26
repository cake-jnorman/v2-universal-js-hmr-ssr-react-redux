import React, {Component, } from 'react';
import {PropTypes} from 'prop-types';
import App from 'universal/components/App/App';

class AppContainer extends Component {
  render () {
    return (
      <App {...this.props}/>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default AppContainer;
