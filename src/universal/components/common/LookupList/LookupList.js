import React from 'react';
import classNames from './LookupList.scss';
import PropTypes from "prop-types";
import ButtonList from "../ButtonList/ButtonList";
import RadioButton from '../RadioButton/RadioButton';

// todo: TEMP IMPORT
import _classCodes from '../../../redux/testData/classCodes';

export default class LookupList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      searchTerm: '',
      classCodes: [..._classCodes]
    }

    this.toggle = this.toggle.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  toggle() {
    this.setState({active: !this.state.active});
  }

  selectItem() {
    // console.log(e.target.value)
    // this.setState({searchTerm: e.target.value});
  }

  onSearchChange(e) {
    //todo: this could use some performance enhancements
    this.setState(
      {
        searchTerm: e.target.value,
        classCodes: _classCodes.filter((cc) => {
          const st = cc.classDescription.toLowerCase();
          const m1 = st.match(e.target.value.toLowerCase());
          const m2 = cc.classCode.match(e.target.value);
          return m1 || m2;
        })
      }
    );
  }

  renderOptionButtons() {
    // todo: key={index} is considered an anti-pattern

    return this.state.classCodes.map((item, index) => {
      return (
        <RadioButton
          buttonType={"list"}
          key={index}
          value={item.classCode}
          onClick={this.selectItem}
        >
          <div className={classNames.children}>
            {item.classCode} - {item.classDescription}
          </div>
        </RadioButton>
      )
    })
  }

  render() {
    const {
      active,
      searchTerm
    } = this.state;

    return (
      <div className={classNames.wrapper}>
        <input className={classNames.input} type="text" value={searchTerm} onChange={this.onSearchChange} onFocus={this.toggle}/>
        <div className={classNames.open} onClick={this.toggle}>&#9660;</div>
        <ButtonList className={[classNames.responseList, active ? classNames.active : undefined].join(' ')}>
          {this.renderOptionButtons()}
        </ButtonList>
      </div>
    );
  }
}

LookupList.propTypes = {
  arthurGuesses: PropTypes.array
};
