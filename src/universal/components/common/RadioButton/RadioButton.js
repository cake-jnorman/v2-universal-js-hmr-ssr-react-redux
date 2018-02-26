import React from 'react';
import classNames from './RadioButton.scss';
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: !!props.checked
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.onClick(Object.assign({}, e, {targetValue: this.props.value}))
  }

  render() {
    const {
      active,
      buttonType,
      className,
      children,
      name,
    } = this.props;

    return (
      <div
        className={[
          classNames.radioButton,
          classNames[buttonType],
          active ? classNames.active : undefined,
          className
        ].join(' ')}
        onClick={this.onClick}
      >
        <input
          checked={!!active}
          name={name}
          type="radio"

        />
        {children}
      </div>
    );
  }
}

Button.propTypes = {
  active: PropTypes.bool,
  buttonType: PropTypes.oneOf([
    undefined,
    'secondary',
    'tertiary',
    'cta',
    'ctaOverColor',
    'list'
  ]),
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
};
