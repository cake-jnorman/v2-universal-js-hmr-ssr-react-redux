import React from 'react';
import classNames from './ButtonList.scss';
import PropTypes from 'prop-types';
// todo: support regular buttons as well?

export default class ButtonList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: undefined,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({currentItem: e.targetValue});
  }

  reMapChildren() {
    const {
      children
    } = this.props;

    const {
      currentItem
    } = this.state;

    // todo: this will step on the child's onClick, if one is provided.  not ideal.
    return React.Children.map(children, child => {
      return React.cloneElement(child, {active: child.props.value === currentItem, onClick: this.onClick})
    });

  }

  render() {
    const { className } = this.props;

    return (
      <div className={[classNames.listWrapper, className].join(' ')}>
        {this.reMapChildren()}
      </div>
    );
  }
}

//todo: need to refactor what is required here and what is required in the button with percent
ButtonList.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.required,
      description: PropTypes.string.required,
      percent: PropTypes.number
    })
  ),
};
