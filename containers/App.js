import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  advanceDay,
  advanceSeason,
} from '../actions/time';

import Day from '../components/Day';
import SleepButton from '../components/SleepButton';
import Field from '../components/Field';
import Inventory from '../components/Inventory';

const $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('bootstrap');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.advanceDay = this.advanceDay.bind(this);
  }

  advanceDay() {
    if (this.props.time.day === 30) {
      this.props.dispatch(advanceSeason());
    }
    this.props.dispatch(advanceDay());
  }

  render() {
    return (
      <div>
        <Day
          season={this.props.time.SEASONS[this.props.time.season]}
          day={this.props.time.day}
        />
        <Inventory money={this.props.money.amount} />
        <SleepButton advanceDay={this.advanceDay} />
        <Field squares={this.props.field.squares} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { time, money, being, field } = state;
  return {
    time,
    money,
    being,
    field,
  };
}

export default connect(mapStateToProps)(App);
