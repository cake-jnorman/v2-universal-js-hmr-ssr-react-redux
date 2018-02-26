import React, {Component, } from 'react';
import {PropTypes} from 'prop-types';

import classNames from './AppRoot.scss';

class AppRoot extends Component {
  render () {
    return (
      <div className={classNames.app}>
        {this.props.children}
      </div>
    );
  }
}

AppRoot.propTypes = {
  children: PropTypes.element.isRequired
};

export default AppRoot;
