import React, { Component, PropTypes as T } from 'react';

export default class Field extends Component {
  render() {
    return (
      <div>
        {this.props.squares.length} Squares
      </div>
    );
  }
}

Field.propTypes = {
  squares: T.arrayOf(T.shape({
    tilled: T.bool.isRequired,
    watered: T.bool.isRequired,
    seed: T.string,
    daysWatered: T.number.isRequired,
  })).isRequired,
};
