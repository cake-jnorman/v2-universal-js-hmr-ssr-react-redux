import React from 'react';
import PropTypes from 'prop-types';
import classNames from './ActionPanel.scss';

export default class ActionPanel extends React.PureComponent {
  render() {
    const {
      children,
      className
    } =  this.props;

    return (
      <div className={[classNames.bottomButtonWrapper, className].join(' ')}>
        {children}
      </div>
    );
  }
}

ActionPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
