import React, { Component, PropTypes as T } from 'react';

export default class SleepButton extends Component {
  render() {
    return (
      <button ref="sleep" onClick={this.props.advanceDay}>Go to sleep</button>
    );
  }
}

SleepButton.propTypes = {
  advanceDay: T.func.isRequired,
};
