// Libraries
import React, {Component, } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

// Components
import Counter from 'universal/modules/counter/components/Counter/Counter.js';

// Actions
import {
  incrementCount,
  decrementCount
} from 'universal/modules/counter/ducks/counter.js';


@connect(mapStateToProps, mapDispatchToProps)
class CounterContainer extends Component {
  render () {
    return (<Counter {...this.props} />);
  }
}


function mapStateToProps(state, props) {
  const count = state.counter.get('count');
  return {
    count
  };
}


function mapDispatchToProps(dispatch, props) {
  return {
    incrementCount: () => {
      dispatch(incrementCount());
    },
    decrementCount: () => {
      dispatch(decrementCount());
    }
  };
}

CounterContainer.propTypes = {
  // State
  count: PropTypes.number.isRequired,

  // Dispatchers
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired
}

export default CounterContainer;
