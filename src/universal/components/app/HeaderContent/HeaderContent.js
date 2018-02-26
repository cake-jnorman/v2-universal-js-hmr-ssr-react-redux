import React from 'react';
import PropTypes from "prop-types";

// common components
import Button from '../../common/Button/Button';

// styling
import classNames from './HeaderContent.scss';

export default class HeaderContent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      companyDescription: 'Our company is responsible for creating the absolute latest in tin foil hats.  Only the finest materials are used in our stylish, custom fit devices.',
    }
  }
  render() {
    const {
      className
    } = this.props;

    const {
      companyDescription
    } = this.state;

    return (
      <div className={[classNames.wrapper, className].join(' ')}>
        <span className={classNames.companyDescription}>
          {companyDescription}
        </span>
        <Button>Table View</Button>
        <Button className={classNames.buttonPadding}>Skip &gt;</Button>
      </div>
    );
  }
}

HeaderContent.propTypes = {
  className: PropTypes.string,
};
