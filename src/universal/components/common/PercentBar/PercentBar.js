import React from 'react';
import classNames from './PercentBar.scss';
import PropTypes from 'prop-types';

export default class PercentBar extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      percent: .751
    }
  }

  getColor(value){
    const hue=((value)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
  }

  render() {
    const { className, percent } = this.props;

    return (
      <div className={[classNames.percentWrapper, className].join(' ')}>
        <div style={{backgroundColor: this.getColor(percent), "width": `${percent * 100}%`}} className={classNames.percent}></div>
      </div>
    );
  }
}

PercentBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  percent: PropTypes.number
};
