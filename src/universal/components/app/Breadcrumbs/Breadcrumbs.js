import React from 'react';
import classNames from './Breadcrumbs.scss';
import PropTypes from 'prop-types';

// this component *may* be acceptable under the common folder

export default class Breadcrumbs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbs: ["a", "b", "c"]
    };
  }


  render() {
    const { className } = this.props;
    const { breadcrumbs } = this.state;
    return (
      <div className={[classNames.breadcrumbsWrapper, className].join(' ')}>
        {breadcrumbs.join(' > ')}
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.object
};
