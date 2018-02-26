import React, {Component, } from 'react';
import {PropTypes} from 'prop-types';

import styles from './App.css';

class App extends Component {
  render () {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
