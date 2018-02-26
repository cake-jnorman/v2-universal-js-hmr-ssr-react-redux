import React from 'react';
import { Switch, Route } from 'react-router-dom';

// app specific
import HeaderContent from '../HeaderContent/HeaderContent';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Wizard from '../Wizard/Wizard';
import ListView from '../ListView/ListView';
import ActionPanel from "../ActionPanel/ActionPanel";

// common
import Button from '../../common/Button/Button';
import PrimaryNav from '../../common/PrimaryNav/PrimaryNav';
import SecondaryNav from '../../common/SecondaryNav/SecondaryNav';

// styling
import classNames from './WizardWrapper.scss';

// todo: this layout is very close to one of the standard layouts in invision - refactor to support this

export default class TrainingWrapper extends React.PureComponent {
  render() {
    return (
      <div className={classNames.trainerWrapper}>
        <div className={classNames.header}>
          <PrimaryNav>
            <HeaderContent/>
          </PrimaryNav>
        </div>
        <div className={classNames.breadcrumbs}>
          <SecondaryNav>
            <Breadcrumbs/>
          </SecondaryNav>
        </div>
        <div className={classNames.main}>
          <Switch>
            <Route path="/wizard" component={Wizard}/>
            <Route path="/list" component={ListView}/>
          </Switch>
        </div>
        <div className={classNames.actionPanel}>
          <ActionPanel>
            {/*<Button buttonType="secondary">Previous</Button>*/}
            <span></span>
            <Button>Save</Button>
          </ActionPanel>
        </div>
      </div>
    );
  }
}


