import React, { Component, PropTypes as T } from 'react';

export default class Inventory extends Component {
  render() {
    return (
      <div>
        Money: {this.props.money}
      </div>
    );
  }
}

Inventory.propTypes = {
  money: T.number.isRequired,
};
