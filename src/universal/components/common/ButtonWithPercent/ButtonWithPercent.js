import React from 'react';
// import classNames from './ButtonWithPercent.scss';
import PropTypes from 'prop-types';
import RadioButton from '../RadioButton/RadioButton';
import PercentBar from "../PercentBar/PercentBar";
import classNames from './ButtonWithPercent.scss';

export default class ButtonWithPercent extends React.PureComponent {
  render() {
    const {
      children,
      className,
      percent,
    } = this.props;

    // todo: need to add adaptability for regular and radio buttons

    return (
      <RadioButton className={[className].join(' ')} {...this.props} >
        <div className={classNames.children}>{children}</div>
        <PercentBar percent={percent} className={classNames.percent}/>
      </RadioButton>
    );
  }
}

ButtonWithPercent.propTypes = {
  buttonType: PropTypes.oneOf([
    undefined,
    'primary',
    'secondary',
    'tertiary',
    'cta',
    'ctaOverColor'
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  percent: PropTypes.number,
};
