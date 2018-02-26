import React from 'react';
import classNames from './Button.scss';
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick && this.props.onClick();
  }

  render() {
    const {
      buttonType,
      className,
      children,
    } = this.props;

    return (
      <button className={[
        classNames.button,
        classNames[buttonType],
        className
      ].join(' ')}
      onClick={this.onClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  buttonType: PropTypes.oneOf([
    undefined,
    'secondary',
    'tertiary',
    'cta',
    'ctaOverColor',
    'list'
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
