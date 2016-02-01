import React, { Component, PropTypes as T } from 'react';

export default class Day extends Component {
  render() {
    return (
      <div>
        {this.props.season} {this.props.day}
      </div>
    );
  }
}

Day.propTypes = {
  season: T.string.isRequired,
  day: T.number.isRequired,
};
