import React from 'react';
import PropTypes from "prop-types";

// common components
import ButtonList from "../../common/ButtonList/ButtonList";
import LookupList from "../../common/LookupList/LookupList";
import ButtonWithPercent from "../../common/ButtonWithPercent/ButtonWithPercent";

// styling
import classNames from './Wizard.scss';

export default class TrainerWizard extends React.PureComponent {
  state = {
    sectionTitle: "Arthur suggestions",
    arthurGuesses: [
      {id: "0000", description: "Retail Store", confidence: .943},
      {id: "1111", description: "Residential Construction and some more long data for testing", confidence: .024},
      {id: "2222", description: "Fast Food", confidence: .018},
      {id: "3333", description: "Ninja", confidence: .014}
    ]
  };

  renderOptionButtons() {
    const {
      arthurGuesses: items
    } = this.state;

    return items.map((item, index) => {
      return (
        <ButtonWithPercent
          buttonType={"secondary"}
          key={index}
          percent={item.confidence}
          value={item.id}
        >
          {item.id} - {item.description}
        </ButtonWithPercent>
      )
    })
  }

  render() {
    const {
      sectionTitle,
    } = this.state;

    return (
      <div className={classNames.wizardWrapper}>
        <div className={classNames.wizardSection}>
          <h3>{sectionTitle}</h3>
          <ButtonList>
            {this.renderOptionButtons()}
          </ButtonList>
        </div>
        <div className={classNames.wizardSection}>
          <h3>Manual Entry</h3>
          <LookupList/>
        </div>
      </div>
    );
  }
}

TrainerWizard.propTypes = {
  arthurGuesses: PropTypes.array
};
