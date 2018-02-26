import React from 'react';
import PropTypes from 'prop-types';
import classNames from './SecondaryNav.scss';

export default class Header extends React.PureComponent {
  render() {
    const {
      children,
      className
    } = this.props;

    return (
      <div className={[classNames.wrapper, className].join(' ')}>
        {children}
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
